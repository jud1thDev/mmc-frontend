import React, { useState } from "react";
import StatusBar from "../../components/common/StatusBar";
import Header3 from "../../components/common/Header3";
import ToggleButton from "../../components/common/ToggleButtonComponent";
import BottomSheetModal from "../../components/common/BottomSheetModal";
import TextField from "../../components/common/TextField";
import ButtonComponent from "../../components/common/ButtonComponent";
import DeleteModal from "../../components/common/modal/DeleteModal";
import edit from "../../assets/settingPage/edit.svg";
import kakaoLogin from "../../assets/settingPage/kakao-login.svg";

const SettingPage = () => {
  const [bottomSheetShow, setBottomSheetShow] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isAlarmOn, setAlarmOn] = useState(true);
  const [isFriendOn, setFriendOn] = useState(true);
  const [selectedFont, setSelectedFont] = useState("nanum-gothic");
  const fonts = [
    { id: "font-nanum-gothic", label: "나눔고딕체", value: "nanum-gothic" },
    { id: "font-nanum-myeongjo", label: "나눔명조체", value: "nanum-myeongjo" },
    { id: "font-ridibatang", label: "리디바탕체", value: "ridibatang" },
  ];

  const handleDeleteModal = () => {
    setShowDeleteModal(false);
    setVisible(false);
    setTimeout(() => {
      setBottomSheetShow(false);
    }, 200);
  };

  return (
    <div className="relative w-[24.5625rem]">
      <StatusBar />
      <Header3 title="책 등록하기" />
      <div className="flex flex-col gap-[2.5rem] px-4 pt-[1.31rem]">
        <div>
          <div className="mb-5 text-st font-semibold">계정 정보</div>
          <div className="flex justify-between items-center h-8 mb-2">
            <span>이름</span>
            <div className="flex items-center gap-2">
              <span>유저닉네임</span>
              <button onClick={() => setBottomSheetShow(true)}>
                <img src={edit} alt="edit button" />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center h-8">
            <span>로그인정보</span>
            <div className="flex items-center gap-[0.62rem]">
              <img src={kakaoLogin} alt="kakao account" />
              <span>1234@naver.com</span>
            </div>
          </div>
        </div>
        <fieldset>
          <legend className="mb-5 text-st font-semibold">사용 설정</legend>
          <div className="flex justify-between items-center h-8 mb-4">
            <label htmlFor="alarmToggle">푸시 알림 허용</label>
            <ToggleButton
              id="alarmToggle"
              isOn={isAlarmOn}
              onToggle={() => setAlarmOn(!isAlarmOn)}
            />
          </div>
          <div className="flex justify-between items-center h-8">
            <label htmlFor="friendToggle">친구 추가 허용</label>
            <ToggleButton
              id="friendToggle"
              isOn={isFriendOn}
              onToggle={() => setFriendOn(!isFriendOn)}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend className="mb-5 text-st font-semibold">기록 폰트 설정</legend>
          <div className="flex flex-col gap-3 nanum-myeongjo">
            {fonts.map((font) => (
              <div key={font.id} className="flex items-center justify-between ">
                <label htmlFor={font.id} className={font.value}>
                  {font.label}
                </label>
                <input
                  type="radio"
                  id={font.id}
                  name="font"
                  value={font.value}
                  checked={selectedFont === font.value}
                  onChange={() => setSelectedFont(font.value)}
                  className="m-2"
                />
              </div>
            ))}
          </div>
        </fieldset>
        <div className="mt-[7.25rem] text-btn3 text-gray-500 self-center">
          <button>로그아웃</button>
          <span> | </span>
          <button>탈퇴하기</button>
        </div>
      </div>
      <BottomSheetModal
        bottomSheetShow={bottomSheetShow}
        setBottomSheetShow={setBottomSheetShow}
        visible={visible}
        setVisible={setVisible}
      >
        <div className="px-4">
          <div className="flex justify-between mb-[1.62rem]">
            <span className="text-st font-semibold">이름 수정</span>
            <button
              onClick={() => setShowDeleteModal(true)}
              className="text-btn2 text-gray-500"
            >
              취소
            </button>
          </div>
          <TextField title="제목" placeholder="유저닉네임" />
          <ButtonComponent
            text="완료"
            type="primary"
            disabled={true}
            className="mt-7"
            onClick={() => setBottomSheetShow(false)}
          />
        </div>
      </BottomSheetModal>
      {showDeleteModal && (
        <DeleteModal
          title={`수정된 이름을\n저장하지 않고 나갈까요?`}
          leftBtnText="나가기"
          rightBtnText="계속하기"
          onLeftClick={handleDeleteModal}
        />
      )}
    </div>
  );
};

export default SettingPage;
