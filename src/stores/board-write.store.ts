import { create } from 'zustand';

interface BoardStore {
    boardMainImage: string;
    title: string;
	introduce: string;
	requiredTime: string;
	difficulty: string;
	peopleCount: string;
	kindCategory: string;
	wayCategory: string;
	materialCategory: string;
    tags: string | null;
	videoLink: string | null;
    material: string[];
	boardContent: string[];
	imageURL: string[];
	cookingTip: string | null;
    mainImageFile: File | null;

    setBoardMainImage: (boardMainImage: string) => void;
    setTitle: (title: string) => void;
    setIntroduce: (introduce: string) => void;
    setRequiredTime: (requiredTime: string) => void;
	setDifficulty: (difficulty: string) => void;
	setPeopleCount: (peopleCount: string) => void;
    setKindCategory: (kindCategory: string) => void;
    setWayCategory: (wayCategory: string) => void;
    setMaterialCategory: (materialCategory: string) => void;
    setTags: (tags: string) => void;
	setVideoLink: (videoLink: string) => void;
    setMaterial: (material: string[]) => void;
    setBoardContent: (boardContent: string[]) => void;
    setImageURL: (imageURL: string[]) => void;
	setCookingTip: (cookingTip: string) => void;

    setMainImageFile: (mainImageFile: File | null) => void;

    resetBoard: () => void;
}

const useBoardWriteStore = create<BoardStore>((set) => ({
    boardMainImage: '',
    title: '',
	introduce: '',
	requiredTime: '',
	difficulty: '',
	peopleCount: '',
	kindCategory: '',
	wayCategory: '',
	materialCategory: '',
    tags: null,
	videoLink: null,
    material:[],
	boardContent: [],
	imageURL: [],
	cookingTip: null,
    mainImageFile: null,

    
    setBoardMainImage: (boardMainImage: string) => {set((state) => ({ ...state, boardMainImage}))},
    setTitle: (title: string) => {set((state) => ({ ...state, title}))},
    setIntroduce: (introduce: string) => {set((state) => ({ ...state, introduce}))},
    setRequiredTime: (requiredTime: string) => {set((state) => ({ ...state, requiredTime}))},
	setDifficulty: (difficulty: string) => {set((state) => ({ ...state, difficulty}))},
	setPeopleCount: (peopleCount: string) => {set((state) => ({ ...state, peopleCount}))},
    setKindCategory: (kindCategory: string) => {set((state) => ({ ...state, kindCategory}))},
    setWayCategory: (wayCategory: string) => {set((state) => ({ ...state, wayCategory}))},
    setMaterialCategory: (materialCategory: string) => {set((state) => ({ ...state, materialCategory}))},
    setTags: (tags: string) => {set((state) => ({ ...state, tags}))},
	setVideoLink: (videoLink: string) => {set((state) => ({ ...state, videoLink}))},
    setMaterial: (material: string[]) => {set((state) => ({ ...state, material}))},
    setBoardContent: (boardContent: string[]) => {set((state) => ({ ...state, boardContent}))},
    setImageURL: (imageURL: string[]) => {set((state) => ({ ...state, imageURL}))},
	setCookingTip: (cookingTip: string) => {set((state) => ({ ...state, cookingTip}))},
    
    setMainImageFile: (mainImageFile: File | null) => {set((state) => ({ ...state, mainImageFile}))},

    resetBoard: () => {
        set((state) => ({
             ...state, boardMainImage: "", title: "", introduce: "", requiredTime: "", difficulty: '쉬움', peopleCount: '1인분',
             kindCategory: '', wayCategory: '', materialCategory: '', tags: null, videoLink: null, 
             material:[], boardContent: [], imageURL: [], cookingTip: null }));
      },    
}))

export default useBoardWriteStore;