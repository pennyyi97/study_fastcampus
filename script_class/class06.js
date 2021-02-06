//switch문!!!!
const device = 'iphone';

switch (device) {
  case 'iphone':
    console.log('아이폰 입니다');
    break; //반드시 추가해주어야 함!
  case 'ipad':
    console.log('아이패드');
    break;
  case 'galaxy note':
    console.log('갤럭시 노트!');
    break;
  default:
    console.log('잘 모르겠어용...');
}
