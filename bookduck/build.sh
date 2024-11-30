# 디렉토리 확인
ls -la

# 프로젝트 루트 디렉토리로 이동 (스크립트 실행 위치를 기준으로)
cd "./bookduck"  # 상대 경로 사용

# output 디렉터리 생성
mkdir output

# Vite 빌드 실행
yarn vite build || exit 1

# 빌드 결과물을 output 디렉터리로 이동
cp -R ./dist/* ./output/  # dist 디렉토리 내의 파일을 output으로 복사

# output 디렉토리를 원래 위치로 복사
cp -R ./output /mmc-frontend/bookduck

echo "빌드 성공. Output directory created at ./output."
