import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { TArt } from "../utils/types";

interface cardListState {
    isLoading: boolean,
    arts: TArt[],
    error: string | null,
    favoriteArts: TArt[]
}

export const fetchArtGallery = createAsyncThunk<TArt[], undefined, { rejectValue: string }>(
    'card/fetchArtGallery', 
    async (_, { rejectWithValue }) => {
        const response = await fetch('https://api.artic.edu/api/v1/artworks?fields=id,image_id,title,artist_display,date_display,place_of_origin,publication_history,alt_image_ids,main_reference_number');

        if(!response.ok) return rejectWithValue('Server Error!');
        const data = await response.json();
        return data.data;
})

const initialState: cardListState = {
    isLoading: false,
    arts: [],
    error: null,
    favoriteArts: []
} 

const cardListSlice = createSlice({
    name: 'cardList',
    initialState,
    reducers: {
        toggleLike: (state, action) => {
            const cardId = action.payload;
            const card = state.arts.find((card) => card.id === cardId);
            if (card) {
                card.isLiked = !card.isLiked;
                if (card.isLiked) {
                    state.favoriteArts.push(card);
                } else {
                    state.favoriteArts = state.favoriteArts.filter((art) => art.id !== cardId);
                }
            }
        },
        addMyArt: (state, action) => {
            state.arts = [...state.arts, action.payload];
        },
        removeArt: (state, action) => {
            const cardId = action.payload;
            state.arts = state.arts.filter((art) => art.id !== cardId);
            state.favoriteArts = state.favoriteArts.filter((art) => art.id !== cardId);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtGallery.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(fetchArtGallery.fulfilled, (state, action) => {
                state.isLoading = false
                state.arts = action.payload
                state.error = null
            })
            .addCase(fetchArtGallery.rejected, (state) => {
                state.isLoading = false
                state.error = 'Server Error!'
            })
    }
});

export const { toggleLike, removeArt, addMyArt} = cardListSlice.actions

export default cardListSlice;