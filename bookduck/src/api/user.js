import { apiAuth } from "./api";
//닉네임받기
export const getNickname = async () => {
  try {
    const response = await apiAuth.get(`/settings/nickname`);
    return response;
  } catch (error) {
    throw error;
  }
};

//세팅정보받기
export const getSettingInfo = async () => {
  try {
    const response = await apiAuth.get(`/settings`);
    return response;
  } catch (error) {
    throw error;
  }
};

//세팅옵션변경
export const patchSettingOption = async (updatedSetting) => {
  try {
    const response = await apiAuth.patch(`/settings/options`, updatedSetting);
    return response;
  } catch (error) {
    throw error;
  }
};

//닉네임체크
export const getNicknameCheck = async (nickname) => {
  try {
    const response = await apiAuth.post(`/settings/nickname/check`, {
      nickname: nickname,
    });
    console.log(response.data);
    return response;
  } catch (error) {
    throw error;
  }
};

//닉네임변경
export const patchNickname = async (updatedNickname) => {
  try {
    const response = await apiAuth.patch(`/settings/nickname`, updatedNickname);
    return response;
  } catch (error) {
    throw error;
  }
};

//로그아웃
export const postLogout = async () => {
  try {
    await apiAuth.post(`/logout`, {});
  } catch (error) {
    console.error(error);
  }
};

//회원 탈퇴
export const deleteUser = async () => {
  try {
    const response = await apiAuth.delete(`/users`);
    localStorage.clear();
    return response;
  } catch (error) {
    throw error;
  }
};
