import { ButtonUI } from "../../components/ButtonUI/ButtonUI"
import { useDispatch } from "../../services/store";
import { addMyArt } from "../../services/cardListSlice";
import { useForm, type SubmitHandler } from "react-hook-form";
import type { TArt } from "../../utils/types";
import style from './addArtPage.module.scss'
import { Link } from "react-router-dom";


export const AddArtPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<TArt>({
    mode: 'onBlur',
  })

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<TArt> = (data) => {
    data.id = Date.now();
    data.isMyArt = true;
    dispatch(addMyArt(data));
    reset();
  }

  return (
    <>
      <Link to='/'><ButtonUI buttonType='button' title = {'Back to gallery'} /></Link>
      <div className={style.container}>
        <h1 className={style.heading}>Add your art to the Gallery</h1>
        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={style.label}>
            <div><span className={style.required}>*</span>Art title</div>
            <input
              className={style.input}
              placeholder="Input your art title" 
              {...register("title", 
                { required: true,
                  pattern: {
                  value: /^[a-zA-Z0-9]/,
                  message: 'Only letters and numbers are allowed'
                }
                })} 
            />
            {errors?.title && <span className={style.error}>{(errors.title.message) ? errors.title.message : 'This field is required'}</span>}
          </label>
          <label className={style.label}>
            <div><span className={style.required}>*</span>Artist</div>
            <input 
              className={style.input}
              placeholder="Input your artist" 
              {...register("artist_display", 
              { required: true,
                pattern: {
                  value: /^[a-zA-Z0-9]/,
                  message: 'Only letters and numbers are allowed'
                }
              })} 
            />
            {errors?.artist_display && <span className={style.error}>{(errors.artist_display.message) ? errors.artist_display.message : 'This field is required'}</span>}
          </label>
          <label className={style.label}>
            <div><span className={style.required}>*</span>Date of display</div>
            <input
              className={style.input}
              placeholder="Input date of display: YYYY" 
              {...register("date_display", 
              { required: true,
                pattern: {
                  value: /^[0-9]/,
                  message: 'Only numbers are allowed'
                }
              })} 
            />
            {errors?.date_display && <span className={style.error}>{(errors.date_display.message) ? errors.date_display.message : 'This field is required'}</span>}
          </label>
          <label className={style.label}>
            <div><span className={style.required}>*</span>Place of origin</div>
            <input
              className={style.input}
              placeholder="Input place of origin" 
              {...register("place_of_origin", 
              { required: true,
                pattern: {
                  value: /^[a-zA-Z0-9]/,
                  message: 'Only letters and numbers are allowed'
                }
              })} 
            />
            {errors?.place_of_origin && <span className={style.error}>{(errors.place_of_origin.message) ? errors.place_of_origin.message : 'This field is required'}</span>}
          </label>
          <label className={style.label}>
            <div>Publication history</div>
            <input
              className={style.input} 
              placeholder="Input publication history" 
              {...register("publication_history", 
              { required: false,
                pattern: {
                  value: /^[a-zA-Z0-9]/,
                  message: 'Only letters and numbers are allowed'
                }
              })} 
            />
            {errors?.publication_history && <span className={style.error}>{(errors.publication_history.message) ? errors.publication_history.message : null}</span>}
          </label>
          <label className={style.label}>
            <div><span className={style.required}>*</span>Place of origin</div>
            <input
              className={style.input}
              placeholder="Input your art url" 
              {...register("myUrl", 
              { required: true })} 
            />
            {errors?.myUrl && <span className={style.error}>{(errors.myUrl.message) ? errors.myUrl.message : 'This field is required'}</span>}
          </label>
          <ButtonUI 
              title="Submit" 
              buttonType="submit" 
          />
        </form>
      </div>
    </>
  )
}