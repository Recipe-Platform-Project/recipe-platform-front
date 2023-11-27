import React, { useEffect, useState, useRef, ChangeEvent, } from "react";
import "./style.css";
import MaterialInput from "components/BoardWrite/MaterialInput";
import { useCookies } from "react-cookie";
import { MAIN_PATH, RECIPE_DETAIL_PATH, USER_RECIPE } from "constant";
import { useNavigate } from "react-router-dom";
import { useBoardWriteStore } from "stores";

//					component: 게시물 작성 페이지 					//
export default function BoardWrite() {
  
  //          state: cookie 상태          //
  const [cookies, setCookies] = useCookies();
  //          state: navigator          //
  const navigator = useNavigate();

  //          component: 대표이미지 컴포넌트          //
  const TitleImage = () => {
    //                  state: 대표 이미지 상태                 //
    const [titleImage, setTitleImage] = useState<string | null>("");
    
    const { boardMainImage, setBoardMainImage, setMainImageFile } = useBoardWriteStore();
    
    //          state: 게시물 이미지 URL 상태          //
  const [imageUrls, setImageUrls] = useState<string[]>([]);
    //                  state: 대표 이미지 input ref 상태                 //
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    //          event handler: 대표이미지 클릭 이벤트 처리          //
    const onTitleImageClickHandler = () => {
      if (!fileInputRef.current) return;
      fileInputRef.current.click();
    };
    //          event handler: 대표 이미지 변경 이벤트 처리          //
    const onTitleImageChangeHandler = (
      event: ChangeEvent<HTMLInputElement>
    ) => {
      if (!event.target.files || !event.target.files.length) return;
      const file = event.target.files[0]
      const imageUrl = URL.createObjectURL(file);
      
      
      setBoardMainImage(imageUrl);
      setMainImageFile(file);
    };
    
    //          render: 대표 이미지 렌더링          //
    return (
      <div onClick={onTitleImageClickHandler}>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onTitleImageChangeHandler}
        />
        {boardMainImage === "" ? (
          <div className="board-write-title-image">
            <div className="title-icon-box">
              <div className="title-camera-icon"></div>
              <div className="title-image-text">
                {"대표 사진을 등록해주세요. "}
                <span className="required-value">{"*"}</span>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div
              className="title-image-box"
              style={{ backgroundImage: `url(${boardMainImage})` }}
            >
              <div className="title-image"></div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  //					component: 게시물 작성 상단 페이지 					//
  const WriteMainTop = () => {
    //          effect: 마운트 시 실행할 함수          //
    useEffect(() => {
      resetBoard();
    },[])
    const { title, introduce, requiredTime, difficulty, peopleCount, kindCategory, wayCategory, materialCategory, 
            setTitle, setIntroduce, setRequiredTime, setDifficulty, setPeopleCount, setKindCategory, setWayCategory, setMaterialCategory, resetBoard} = useBoardWriteStore();

    //          event handler: 제목 변경 이벤트 처리          //
    const onTitleChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setTitle(value);
    }
    //          event handler: 레시피 소개 변경 이벤트 처리          //
    const onIntroduceChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const value = event.target.value;
      setIntroduce(value);
    }
    //          event handler: 소요시간 변경 이벤트 처리          //
    const onRequiredTimeChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      setRequiredTime(value);
    }
    //          event handler: 난이도 변경 이벤트 처리          //
    const onDifficultyChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setDifficulty(value);
    }
    //          event handler: 인원수 변경 이벤트 처리          //
    const onPeopleCountChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setPeopleCount(value);
    }
    //          event handler: 종류별 카테고리 변경 이벤트 처리          //
    const onKindCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setKindCategory(value);
    }
    //          event handler: 분류별 카테고리 변경 이벤트 처리          //
    const onWayCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setWayCategory(value);
    }
    //          event handler: 재료별 카테고리 변경 이벤트 처리          //
    const onMaterialCategoryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
      const value = event.target.value;
      setMaterialCategory(value);
    }
    
    //					render: 게시물 작성 상단 렌더링					//
    return (
      <div>
        <div className="board-write">
          <div className="board-write-title-box">
            <div className="board-write-title">{"레시피 등록"}</div>
          </div>
          <div className="board-write-info-container">
            <TitleImage />
            <div className="board-write-info-box">
              <div className="board-write-info-title-box">
                <div className="board-write-info-title-message">
                  <div className="board-write-info-title">
                    {"레시피 제목 "}
                    <span className="required-value">{"*"}</span>
                  </div>
                  <span className="">{"*은 필수 입력 사항입니다."}</span>
                </div>
                <input
                  value={title}
                  onChange={onTitleChangeHandler}
                  spellCheck="false"
                  type="text"
                  placeholder={"예) 소고기 듬뿍 미역국"}
                  className="info-input1"
                />
              </div>
              <div className="board-write-description-box">
                <div className="board-write-description-title">
                  {"간단 요리소개 "}
                  <span className="required-value">{"*"}</span>
                </div>
                <textarea
                  value={introduce}
                  onChange={onIntroduceChangeHandler}
                  spellCheck="false"
                  placeholder={
                    "예) 소고기 듬뿍 미역국 소고기 듬뿍 미역국 소고기 듬뿍 미역국 소고기 듬뿍 미역국 소고기 듬뿍 미"
                  }
                  className="info-input2"
                />
              </div>
              <div className="board-write-info-choice-box">
                <div className="board-write-cooking-time-box">
                  <div className="board-write-cooking-choice-title">
                    {"소요시간 "}
                    <span className="required-value">{"*"}</span>
                  </div>
                  <input
                    value={requiredTime}
                    onChange={onRequiredTimeChangeHandler}
                    className="board-write-choice"
                    placeholder={"예) 10분"}
                    spellCheck="false"
                    type="text"
                  />
                </div>
                <div className="board-write-cooking-level-box">
                  <div className="board-write-cooking-choice-title">
                    {"난이도 "}
                    <span className="required-value">{"*"}</span>
                  </div>
                  <select className="board-write-choice1" name="level" onChange={onDifficultyChangeHandler}>
                    <option value="쉬움" selected={difficulty === '쉬움'}>{"쉬움"}</option>
                    <option value="보통" selected={difficulty === '보통'}>{"보통"}</option>
                    <option value="어려움" selected={difficulty === '어려움'}>{"어려움"}</option>
                  </select>
                </div>
                <div className="board-write-cooking-person-box">
                  <div className="board-write-cooking-choice-title">
                    {"인원 "}
                    <span className="required-value">{"*"}</span>
                  </div>
                  <select className="board-write-choice1" name="person" onChange={onPeopleCountChangeHandler}>
                    <option value="1인분" selected={peopleCount === '1인분'}>{"1인분"}</option>
                    <option value="2인분" selected={peopleCount === '2인분'}>{"2인분"}</option>
                    <option value="3인분" selected={peopleCount === '3인분'}>{"3인분"}</option>
                    <option value="4인분" selected={peopleCount === '4인분'}>{"4인분"}</option>
                    <option value="5인분" selected={peopleCount === '5인분'}>{"5인분"}</option>
                    <option value="6인분" selected={peopleCount === '6인분'}>{"6인분"}</option>
                  </select>
                </div>
              </div>
              <div className="board-write-category-box">
                <div className="board-write-cooking-choice-title">
                  {"카테고리 "}
                  <span className="required-value">{"*"}</span>
                </div>
                <div className="board-write-category-choice">
                  <select className="board-write-choice1" name="kindCategory" onChange={onKindCategoryChangeHandler}>
                    <option value="" selected={kindCategory === ''}>{"종류별"}</option>
                    <option value="국/탕" selected={kindCategory === '국/탕'}>{"국/탕"}</option>
                    <option value="찌개" selected={kindCategory === '찌개'}>{"찌개"}</option>
                    <option value="디저트" selected={kindCategory === '디저트'}>{"디저트"}</option>
                    <option value="면" selected={kindCategory === '면'}>{"면"}</option>
                    <option value="한식" selected={kindCategory === '한식'}>{"한식"}</option>
                    <option value="퓨전" selected={kindCategory === '퓨전'}>{"퓨전"}</option>
                    <option value="양식" selected={kindCategory === '양식'}>{"양식"}</option>
                    <option value="김치/젓갈/장류" selected={kindCategory === '김치/젓갈/장류'}>{"김치/젓갈/장류"}</option>
                    <option value="차/음료/술" selected={kindCategory === '차/음료/술'}>{"차/음료/술"}</option>
                    <option value="안주" selected={kindCategory === '안주'}>{"안주"}</option>
                    <option value="기타" selected={kindCategory === '기타'}>{"기타"}</option>
                  </select>
                  <select className="board-write-choice1" name="wayCategory" onChange={onWayCategoryChangeHandler}>
                    <option value="" selected={wayCategory === ''}>{"방법별"}</option>
                    <option value="볶음" selected={wayCategory === '볶음'}>{"볶음"}</option>
                    <option value="끓이기" selected={wayCategory === '끓이기'}>{"끓이기"}</option>
                    <option value="부침" selected={wayCategory === '부침'}>{"부침"}</option>
                    <option value="조림" selected={wayCategory === '조림'}>{"조림"}</option>
                    <option value="무침" selected={wayCategory === '무침'}>{"무침"}</option>
                    <option value="비빔" selected={wayCategory === '비빔'}>{"비빔"}</option>
                    <option value="찜" selected={wayCategory === '찜'}>{"찜"}</option>
                    <option value="절임" selected={wayCategory === '절임'}>{"절임"}</option>
                    <option value="튀김" selected={wayCategory === '튀김'}>{"튀김"}</option>
                    <option value="삶기" selected={wayCategory === '삶기'}>{"삶기"}</option>
                    <option value="굽기" selected={wayCategory === '굽기'}>{"굽기"}</option>
                    <option value="데치기" selected={wayCategory === '데치기'}>{"데치기"}</option>
                    <option value="기타" selected={wayCategory === '기타'}>{"기타"}</option>
                  </select>
                  <select className="board-write-choice1" name="materialCategory" onChange={onMaterialCategoryChangeHandler}>
                    <option value="" selected={materialCategory === ''}>{"재료별"}</option>
                    <option value="소고기" selected={materialCategory === '소고기'}>{"소고기"}</option>
                    <option value="돼지고기" selected={materialCategory === '돼지고기'}>{"돼지고기"}</option>
                    <option value="닭고기" selected={materialCategory === '닭고기'}>{"닭고기"}</option>
                    <option value="육류" selected={materialCategory === '육류'}>{"육류"}</option>
                    <option value="해물류" selected={materialCategory === '해물류'}>{"해물류"}</option>
                    <option value="채소류" selected={materialCategory === '채소류'}>{"채소류"}</option>
                    <option value="달걀/유제품" selected={materialCategory === '달걀/유제품'}>{"달걀/유제품"}</option>
                    <option value="가공식품류" selected={materialCategory === '가공식품류'}>{"가공식품류"}</option>
                    <option value="곡물류" selected={materialCategory === '곡물류'}>{"곡물류"}</option>
                    <option value="기타" selected={materialCategory === '기타'}>{"기타"}</option>
                  </select>
                </div>
              </div>
              <div className="board-write-tag-box">
                <div className="board-write-tag-title">{"태그"}</div>
                <input
                  placeholder={"예) #태그 #지역 #재료"}
                  spellCheck="false"
                  type="text"
                  className="info-input1"
                />
              </div>
              <div className="board-write-video-box">
                <div className="board-write-video-title">
                  {"유튜브 동영상 링크"}
                </div>
                <input
                  placeholder={"예) http://www.youtube.com"}
                  spellCheck="false"
                  type="text"
                  className="info-input1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  //					component: 게시물 재료 등록 페이지 					//
  const WriteMaterial = () => {
    //          state: 재료 등록 박스 상태          //
    const [materiallistItems, setMaterialListItems] = useState<number[]>([0,0]);
  
    //          event handler: 재료 등록 박스 추가 버튼 클릭 핸들러         //
    const materialBoxAddClickHandler = () => {
      if (materiallistItems.length < 4) {
        setMaterialListItems([...materiallistItems, materiallistItems.length]);
      }
    };

    //          event handler: 재료 등록 박스 삭제 버튼 클릭 핸들러         //
    const materialBoxDeleteClickHandler = (index: number) => {
      if (materiallistItems.length > 1) {
        const updatedListItems = [...materiallistItems];
        updatedListItems.splice(index, 1);
        setMaterialListItems(updatedListItems);
      }
    };
  
    //					render: 게시물 재료 등록 페이지 렌더링 					//
    return (
      <div className="write-material-wrapper">
        <div className="write-material-title">
          {"재료 등록"}
          <span className="required-value">{"*"}</span>
        </div>
        <div className="write-material-input-box">
          {materiallistItems.map((item,index) => (
          <div key={item} >
            <div className="material-main-box">
              <input
                className="material-input"
                type="text"
                placeholder="예) 재료 구분"
              />
            <div className="close-icon" onClick={() => materialBoxDeleteClickHandler(index)} ></div>
          </div>
            <MaterialInput />
          </div>
          ))}
        </div>
        <div className="material-bundle-add-box-container">
          <div className="material-bundle-add-box" onClick={materialBoxAddClickHandler}>
            <div className="material-bundle-add-button"></div>
            <div className="material-bundle-add-text">{"묶음 추가"}</div>
          </div>
        </div>
      </div>
    );
  };
  
  //					component: 게시물 조리 순서 페이지 					//
  const CookingSequence = () => {

    interface CookingSequence {
      sequence: number;
      image: string;
      content: string;
    }

    //            state: file input ref         //
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    //            state: 조리 순서 객체 리스트 상태          //
    const [cookingSequences, setCookingSequences] = useState<CookingSequence[]>(
      [{
      sequence: 1,
      image: '',
      content: '',
      }]
    );
    //           state: 선택한 조리 순서 인덱스 상태          //
    const [selectedSequenceIndex, setSelectedSequenceIndex] = useState<number>(0);

    //          event handler: 조리 순서 박스 추가 버튼 클릭 핸들러          //
    const addListItemClickHandler = () => {

      if (cookingSequences.length >= 20) return;

      const newCookingSequence: CookingSequence = {
        sequence: cookingSequences.length + 1,
        image: '',
        content: '',
      }

      const newCookingSequences = cookingSequences.map(item => item);
      newCookingSequences.push(newCookingSequence);
      setCookingSequences(newCookingSequences);
    };
    
    //          event handler: 조리 순서 박스 삭제 버튼 클릭 핸들러         //
    const handleCloseIconClick = (index: number) => {
      if (cookingSequences.length > 1) {
        const newCookingSequences = cookingSequences.filter((item, filterIndex) => index !== filterIndex);
        newCookingSequences.forEach((item, forEachIndex) => {
          if(forEachIndex >= index) {
            item.sequence--;
          }
        });
        setCookingSequences(newCookingSequences);
      }
    };
    

    //          event handler: 이미지 변경 이벤트          //
    const onSequenceImageChangeHandler = (
      event: ChangeEvent<HTMLInputElement>,
      index: number
    ) => {
      if (!event.target.files || !event.target.files.length) return;
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      const newCookingSequences = cookingSequences.map(item => item);
      newCookingSequences[index].image = imageUrl;
      setCookingSequences(newCookingSequences);
    };

    //          event handler: textarea 값 변경 이벤트          //
    const onTextareaChangeHandler = (
      event: ChangeEvent<HTMLTextAreaElement>,
      index: number
    ) => {
      const { value } = event.target;
      const newCookingSequences = cookingSequences.map(item => item);
      newCookingSequences[index].content = value;
      setCookingSequences(newCookingSequences);
    };

    //          event handler: 이미지 업로드 클릭 이벤트          //
    const onSequenceImageClickHandler = (index: number) => {
      if (!fileInputRef.current) return;
      setSelectedSequenceIndex(index);
      fileInputRef.current.click();
    };

    //					render: 게시물 조리 순서 페이지 렌더링					//
    return (
      <div className="cooking-sequence-wrapper">
        <div className="write-cooking-sequense-title">
          {"조리 순서"}
          <span className="required-value">{"*"}</span>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={(event) => onSequenceImageChangeHandler(event, selectedSequenceIndex)}
        />
        {cookingSequences.map((cookingSequence, index) => (
        <div className="cooking-sequence-box" key={index} >
          <div className="sequence-close-icon" onClick={() => handleCloseIconClick(index)}></div>
          <div className="sequence-sub-box">
            <div className="cooking-sequence-box-container">
            <div className="cooking-sequence-number-box">
              <div className="cooking-sequence-number">{`STEP ${cookingSequence.sequence}`}</div>
            </div>
            <div onClick={() => onSequenceImageClickHandler(index)}>
              {cookingSequence.image === "" ? (
                <div className="cooking-sequence-image-box">
                  <div className="cooking-sequence-image-icon"></div>
                </div>
              ) : (
                <div>
                  <div className="cooking-sequence-image-box"
                    style={{ backgroundImage: `url(${cookingSequence.image})` }}></div>
                </div>
              )}
            </div>
            <textarea 
              placeholder="조리 방법을 알려주세요." 
              spellCheck="false"
              value={cookingSequence.content}
              onChange={(event) => onTextareaChangeHandler(event, index)}
            />
            </div>
          </div>
        </div>
        ))}
        <div className="material-bundle-add-box-container">
          <div className="material-bundle-add-box" onClick={addListItemClickHandler}>
            <div className="material-bundle-add-button"></div>
            <div className="material-bundle-add-text">{"순서 추가"}</div>
          </div>
        </div>
        <div className="cooking-tip-box">
          <div className="cooking-tip"></div>
          <input className="cooking-sequence-input" type="text" />
        </div>
      </div>
    );
  };


  //					component: 요리 완성 사진 페이지 					//
  const CookingCompletionImage = () => {
    //          state: 요리 완성 사진 박스 상태         //
    const [cookingCompletionImageItems, setCookingCompletionImageItems] = useState<number[]>([0,0,0,0,0]);
    //          component: 요리 완성 사진 박스 컴포넌트         //
    const CompleteCookingPhoto = () => {

      //                  state: 완성 이미지 상태                 //
      const [completionImage, setCompletionImage] = useState<string | null>("");
      //                  state: 완성 이미지 input ref 상태                 //
      const fileInputRef = useRef<HTMLInputElement | null>(null);
      //          event handler: 완성이미지 클릭 이벤트 처리          //
      const onCompletionImageClickHandler = () => {
        if (!fileInputRef.current) return;
        fileInputRef.current.click();
      };

      //          event handler: 완성 이미지 변경 이벤트 처리          //
      const onCompletionImageChangeHandler = (
        event: ChangeEvent<HTMLInputElement>
      ) => {
        if (!event.target.files || !event.target.files.length) return;
        const imageUrl = URL.createObjectURL(event.target.files[0]);
        setCompletionImage(imageUrl);
      };

      //          render: 요리 완성 사진 박스 렌더링          //
      return (
        <div onClick={onCompletionImageClickHandler}>
          <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          onChange={onCompletionImageChangeHandler}
        />
        {completionImage === "" ? (
        
          <div className="cooking-completion-image-upload-container">
            <div className="cooking-completion-image-upload-icon"></div>
          </div>
          ):(
          <div>
            <div
              className="cooking-completion-image"
              style={{ backgroundImage: `url(${completionImage})` }}
            >
              <div className=""></div>
            </div>
          </div>
          )}
        </div>
      );
    };
    //					render: 요리 완성 사진 페이지 렌더링					//
    return (
      <div className="cooking-completion-image-box">
        <div className="cooking-completion-image-title">
          {"요리 완성 사진"}
          <span className="required-value">{"*"}</span>
        </div>
        <div className="cooking-completion-image-upload">
        {cookingCompletionImageItems.map((item) => (
          <CompleteCookingPhoto />
        ))}
        </div>
      </div>
    );
  };
  //					component: 버튼 페이지 					//
  const BoardButton = () => {

    const { title, introduce, requiredTime, difficulty, peopleCount, kindCategory, wayCategory, materialCategory, boardMainImage,
      setTitle, setIntroduce, setRequiredTime, setDifficulty, setPeopleCount, setKindCategory, setWayCategory, setMaterialCategory} = useBoardWriteStore();
    
    const aaaaa = { title, introduce, requiredTime, difficulty, peopleCount, kindCategory, wayCategory, materialCategory} 

    //          event handler: 등록 버튼 클릭 이벤트 처리          //
    const onPostingButtonClickHandler = () => {

      


      
      if (window.confirm("등록 하시겠습니까?")) {
        if(!boardMainImage){
        alert('대표 사진을 등록해주세요.');
        return;
      }
        if (!title || !introduce || !requiredTime || !kindCategory || !wayCategory || !materialCategory) {
          alert('레시피 정보를 모두 입력해주세요.');
          return;
        }
      
        // mainImageFile을 서버에 업로드하고 반환받은 url을 사용해서 다시 게시물 등록에 사용
      alert('등록되었습니다.')
      navigator(RECIPE_DETAIL_PATH(1))
      
    }
  }
    //          event handler: 임시 저장 버튼 클릭 이벤트 처리          //
    const onSaveButtonClickHandler = () => {
      if (window.confirm("임시 저장 하시겠습니까?")) {
        alert('임시 저장되었습니다.')
        navigator(USER_RECIPE('email@email.com'))
      }
    }
  
    //          event handler: 취소 버튼 클릭 이벤트 처리          //
    const onCancellButtonClickHandler = () => {
      if (window.confirm("정말 취소하시겠습니까?")) {
        alert("취소되었습니다.");
        navigator(MAIN_PATH)
      }
    };
    //					render: 버튼 페이지 렌더링					//
    return (
      <div className="board-button-box">
        <div className="save-button" onClick={onSaveButtonClickHandler}>{"임시 저장"}</div>
        <div className="upload-button" onClick={onPostingButtonClickHandler}>{"등록"}</div>
        <div className="cancle-button" onClick={onCancellButtonClickHandler}>{"취소"}</div>
      </div>
    );
  };

  
  //					render: 게시물 작성 페이지 렌더링					//
  return (
    <div id="board-write-wrapper">
      <div className="board-write-main">
        <WriteMainTop />
        <div className="write-divider"></div>
        <WriteMaterial />
        <div className="write-divider"></div>
        <CookingSequence />
        <div className="write-divider"></div>
        <CookingCompletionImage />
        <div className="write-divider"></div>
        <BoardButton />
      </div>
    </div>
  );
}
