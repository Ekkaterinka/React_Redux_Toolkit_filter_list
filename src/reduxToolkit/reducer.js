import { filter} from './actions'
import { createReducer } from "@reduxjs/toolkit";

const initState = {
  list: [
    {id:1, title: 'прообразом Чубакки стал пёс режиссёра'},
    {id:2, title: 'актёрам разрешили подобрать любимый цвет для своих световых мечей'},
    {id:3, title: 'в фильме «Звёздные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину'},
    {id:4, title: 'дыхание Дарта Вейдера — это звуки дыхательной маски, подключённой к аквалангу'},
    {id:5, title: 'планета Татуин названа в честь реального города в Тунисе — стране, где происходила часть съёмок'},
  ],
  value: 0
};

const dataReducer = createReducer(initState, (builder) => {
  builder.addCase(filter, (state, action) => {
    state.value = state.value + 1
  });
});

export default dataReducer;