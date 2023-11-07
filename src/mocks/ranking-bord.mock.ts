import { url } from "inspector"
import { RankingItem } from "Types"

const rankingBoardListMock: RankingItem[] = [
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
        writeNickname: '김계란',
        favoriteCount: 444,
        starRating: 2
    },
    {
        boardNumber : 2,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '고급 레스토랑 스테이크를 따라 만들어 볼까요?',
        writeNickname: '스떼끼',
        favoriteCount: 320,
        starRating: 4
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    },
    {
        boardNumber : 1,
        boardTitleImage: 'https://cdn.pixabay.com/photo/2017/08/06/06/43/pizza-2589575_1280.jpg',
        title: '맛있는 피자를 만들어 봅시다',
        writeNickname: '계란',
        favoriteCount: 200,
        starRating: 5
    }
];

export default rankingBoardListMock;