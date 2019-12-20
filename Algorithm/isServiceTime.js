// A. 콜버스 운행 시간 여부 확인

// 콜버스의 운행 시간은 23:00~3:59 입니다.
// 일요일에서 월요일로 넘어가는 밤을 제외하고 매일 운행을 하고 있습니다.
// 날짜와 시간을 입력 받으면 운행을 하는지 확인하는 함수가 필요합니다.

// int day = 0,1,2,3,4,5,6 / 0: 월요일, 6: 일요일
// int hourOfDay = 0 ~ 23

const isServiceTime = (day, hourOfDay) => {
  const offHoursOnMonday = [0, 1, 2, 3];

  if (3 < hourOfDay && 23 > hourOfDay) return false;
  if (day === 6 && hourOfDay === 23) return false;

  if (day === 0 && offHoursOnMonday.includes(hourOfDay)) return false;

  return true;
};

const day = 0; // 0 ~ 6   0: 월요일 6: 일요일
const hourOfDay = 0; // 0 ~ 23

console.log(isServiceTime(day, hourOfDay));
