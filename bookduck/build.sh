#!/bin/sh

# 프로젝트 루트 디렉토리로 이동 (스크립트 실행 위치를 기준으로)
cd "/mmc-frontend/bookduck" 

# 기존 output 디렉터리 삭제 (있을 경우)
rm -rf output

# output 디렉터리 생성
mkdir output

# Vite 빌드 실행
yarn vite build || exit 1

# 빌드 결과물을 output 디렉터리로 이동
cp -R ./dist/* ./output

echo "빌드 성공. Output directory created at ./output."
