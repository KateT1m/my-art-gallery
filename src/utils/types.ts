export type TArt = {
    id: number;
    image_id: string;
    title: string;
    artist_display: string;
    date_display: string;
    place_of_origin: string;
    publication_history: string;
    isLiked: boolean;
    isMyArt: boolean;
    myUrl: string;
}

export type TArtResponse = {
  data: TArt[];
};