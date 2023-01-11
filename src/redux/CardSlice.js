import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: "card",
    initialState: {
        activeCard: [],
        cards: [],
        points: 0,
        items: [
            { id: 1, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', name: 'React', stat: '' },
            { id: 2, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png', name: 'React', stat: '' },
            { id: 3, src: 'https://miro.medium.com/max/336/1*glD7bNJG3SlO0_xNmSGPcQ.png', name: 'docker', stat: '' },
            { id: 4, src: 'https://miro.medium.com/max/336/1*glD7bNJG3SlO0_xNmSGPcQ.png', name: 'docker', stat: '' },
            { id: 5, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png', name: 'vsCode', stat: '' },
            { id: 6, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png', name: 'vsCode', stat: '' },
            { id: 7, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png', name: 'spotify', stat: '' },
            { id: 8, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/991px-Spotify_icon.svg.png', name: 'spotify', stat: '' },
            { id: 9, src: 'https://cdn-icons-png.flaticon.com/512/194/194279.png', name: 'dog', stat: '' },
            { id: 10, src: 'https://cdn-icons-png.flaticon.com/512/194/194279.png', name: 'dog', stat: '' },
            { id: 11, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmV2kJtIfg99nSXMzxPe8D3-Rf937tri9Kg&usqp=CAU', name: 'android', stat: '' },
            { id: 12, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmV2kJtIfg99nSXMzxPe8D3-Rf937tri9Kg&usqp=CAU', name: 'android', stat: '' },
            { id: 13, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wiHEoouwqYN6uJHklW_ZcuDyREdfEbNWfw&usqp=CAU', name: 'youtube', stat: '' },
            { id: 14, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wiHEoouwqYN6uJHklW_ZcuDyREdfEbNWfw&usqp=CAU', name: 'youtube', stat: '' },
            { id: 15, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-84QJaofvWOR-Y_pUqut53hJ_-tkYiRBbWA&usqp=CAU', name: 'rocket', stat: '' },
            { id: 16, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-84QJaofvWOR-Y_pUqut53hJ_-tkYiRBbWA&usqp=CAU', name: 'rocket', stat: '' },
            { id: 17, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Adidas_isologo.svg/1200px-Adidas_isologo.svg.png', name: 'adidas', stat: '' },
            { id: 18, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Adidas_isologo.svg/1200px-Adidas_isologo.svg.png', name: 'adidas', stat: '' },
            { id: 19, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png', name: 'nike', stat: '' },
            { id: 20, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/1280px-Logo_NIKE.svg.png', name: 'nike', stat: '' },
            { id: 21, src: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png', name: 'tesla', stat: '' },
            { id: 22, src: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png', name: 'tesla', stat: '' },
            { id: 23, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png', name: 'wolkswagen', stat: '' },
            { id: 24, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/2048px-Volkswagen_logo_2019.svg.png', name: 'wolkswagen', stat: '' },
            { id: 25, src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/SVG_black_joker.svg/1755px-SVG_black_joker.svg.png', name: 'joker', stat: '' }
        ].sort(() => Math.random() - 0.6),
    },
    reducers: {
        activeCard: (state, action) => {
            state.items.find(item => item.id == action.payload).stat = "active";
            state.activeCard.push(state.items.find(item => item.id == action.payload))
            state.cards.push(1)
        },
        correctCard: (state, action) => {
            if (state.activeCard[0].name === state.activeCard[1].name) {
                state.items.find(item => item.id == state.activeCard[0].id).stat = "correct";
                state.items.find(item => item.id == state.activeCard[1].id).stat = "correct";
                state.points = state.points + 50;
                state.activeCard = [];
            }
            else {
                state.items.find(item => item.id == state.activeCard[0].id).stat = " ";
                state.items.find(item => item.id == state.activeCard[1].id).stat = " ";
                state.points = state.points - 10;
                state.activeCard = [];
            }

        }
    },
})

export const { activeCard, correctCard } = cardSlice.actions

export default cardSlice.reducer;