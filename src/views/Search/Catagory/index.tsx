import React,{ useState} from 'react'
import './style.css';

const typeList: string[] = ['국/탕', '찌개', '디저트', '면', '한식', '퓨전', '양식', '김치/젖갈/장류', '안주', '기타'];
const wayList: string[] = ['볶음', '끓이기', '부침', '조림', '무침', '비빔', '찜', '절임', '튀김', '삶기', '굽기', '데치기','기타']
const materialList: string[] = ['소고기', '돼지고기', '닭고기', '육류', '해물류', '채소류', '달걀/유제품', '가공식품류', '곡물류', '기타']

export default function Catagory() {

    const[type, setType] = useState<string>('');
    const[way, setWay] = useState<string>('');
    const[material, setMaterial] = useState<string>();

    const onTypeClickHandler = (selectType: string) => {
        if (type === selectType) setType('');
        else setType(selectType);
    }

    const onWayClickHandler = (selectWay: string) => {
        if (way === selectWay) setWay('');
        else setWay(selectWay);
    }

    const onMaterialClickHandler = (selectMaterial: string) =>{
        if(material === selectMaterial) setMaterial('');
        else setMaterial(selectMaterial);
    }

  return (
    <div id='search-catagory-conainer'>
        <div className='search-catagory-first-big-box'>
            <div className='search-catagory-main-box'>
                <div className='search-tag-type-button'>{'종류별'}</div>
                <div className='search-tag-type-button'>{'방법별'}</div>
                <div className='search-tag-type-button'>{'재료별'}</div>
            </div>
            <div className='search-catagory-sub-box'>
                <div className='search-catagory-sub-big-box'>
                    {typeList.map(item => <div className={type === item ? 'search-tag-type-button-active' : 'search-tag-detail-button'} onClick={() => onTypeClickHandler(item)}>{item}</div>)}
                </div>
                <div className='search-catagory-sub-big-box'>
                    {wayList.map(item => <div className={way === item ?'search-tag-type-button-active' : 'search-tag-detail-button'} onClick={() => onWayClickHandler(item)}>{item}</div>)}
                </div>
                <div className='search-catagory-sub-big-box'>
                    {materialList.map(item => <div className={material === item ? 'search-tag-type-button-active' : 'search-tag-detail-button'} onClick={() => onMaterialClickHandler(item)}>{item}</div>)}
                </div>
            </div>
        </div>
    </div>
  )
}
