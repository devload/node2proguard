# preview
node에서 proguard라이브러리를 직접 실행하여 완벽한 결과를 출력하도록 하기 위한 샘플 프로젝트 입니다
java-caller를 이용하여 android proguard Library를 직접 호출하지 않고 Wrapper를 호출
https://github.com/devload/ProguardWrapper

# 라이브러리 설치
```npm
npm install java-caller --save
```

# 사용법
```node
const JavaCaller = require('java-caller');
const java = new JavaCaller(JAVA_CALLER_OPTIONS);
const {status, stdout, stderr} = java.run(JAVA_ARGUMENTS,JAVA_CALLER_RUN_OPTIONS);
```

# Proguard
## Proguard 라이브러리 위치
```
SDK 설치 경로/tools/proguard 폴더에 위치
sdk가 설치되어 있지 않을 경우 해당 git에 있는 proguard 사용
```

