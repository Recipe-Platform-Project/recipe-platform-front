import BoardDetailItem from "Types/board-detail-item.interface";

const boardDetailItemMock: BoardDetailItem = {
    boardNumber: 1,
    boardMainImage: 'https://oksunmoon.com/web/product/tiny/201812/8efef05023a2ed936522d9ca4dbc2dad.jpg',
    writerProfileImage: 'https://s3.orbi.kr/data/file/united2/e9104b7943034b69bed71b8b1985ac0a.jpeg',
    writerNickname: '뚱인데용뚱인데용',
    title: '집게사장 잡아서 만들었어용!',
    introduce: '집에서 이 놀라운 레시피를 시도해보세요!',
    boardContent: ['단계 1: ...', '단계 2: ...', '단계 3: ...'],
    writeDateTime: '2023-11-16T12:00:00Z',
    viewCount: 1000,
    userEmail: 'Ddong-ee@naver.com',
    commentCount: 20,
    favoriteCount: 50,
    videoLink: 'https://www.youtube.com/watch?v=buRwmddujhI',
    cookingTip: '맛을 높이려면 한마리 더 추가하세요!',
    requiredTime: '1 시간',
    difficulty: '쉬움',
    peopleCount: '4인분',
    imageURL: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg',
        'https://example.com/image3.jpg',
    ],
    
    subscirbe: 'https://example.com/subscribe-link',
    cookingFinishImage: [
        'https://example.com/finish-image1.jpg',
        'https://example.com/finish-image2.jpg',
    ],
};

export default boardDetailItemMock;
