import { url } from "inspector"
import { RankingItem } from "Types"

const rankingBoardListMock: RankingItem[] = [
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },{
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writerNickname: '김계란',
        viewCount: 100,
        favoriteCount: 444,
        starRating: 2
    },
];
export default rankingBoardListMock;