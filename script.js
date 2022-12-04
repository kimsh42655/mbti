const start = document.getElementById("start");
const question = document.getElementById("question");
const answer = document.getElementById("answer");

var num = 1;
var questions = {
  1: {
    title: "나는 멍 때릴 때",
    type: "SN",
    A: "정말 아무생각도 하지 않는다.",
    B: "이런저런 상상을 한다."
  },
  2: {
    title:
      "주말에 씻지도 않고 집에서 뒹굴거리고 있는데 친구가 갑자기 보자고 한다.",
    type: "EI",
    A: "좋지! 바로 씻고 준비한다.",
    B: "갑작스러운 약속은 별로...이런저런 핑계를 대고 나가지 않는다."
  },
  3: {
    title: "친구가 준비하던 시험에서 떨어졌다며 우울해할 때 내 반응은?",
    type: "TF",
    A: "아쉽네...무슨 시험이었어? 다음 시험은 언제야?",
    B: "준비하느라 고생했을텐데...많이 힘들지ㅠㅠ"
  },

  4: {
    title: "내가 더욱 중요하게 생각하는 것은?",
    type: "JP",
    A: "일이 수행된 방식 및 과정이 중요하다.",
    B: "임무를 완수했는지 결과가 중요하다."
  },
  5: {
    title: "나는 식당을 고를 때",
    type: "SN",
    A: "인터넷 검색 후 블로그 리뷰, 후기, 별점 등을 꼼꼼히 확인한다.",
    B: "간판만 보고도 맛집인지 아닌지 느낌이 온다."
  },
  6: {
    title: "많은 사람들 앞에서 발표할 때",
    type: "EI",
    A: "많은 사람들이 나에게 주목하는게 즐겁다.",
    B: "나에게 주목된 시선이 부담스럽다."
  },

  7: {
    title:
      "팀원들과 조별과제를 하고있다. 자료를 정리해서 올렸을 때 듣고싶은 반응은?",
    type: "TF",
    A: "정리 잘했네~ 이 부분은 이렇게 수정하면 더 좋을 것 같아 !",
    B: "열심히 했네~ 고생 많았어 !"
  },
  8: {
    title: "나는 일을 시작할 때",
    type: "JP",
    A: "계획이 확실하게 수립된 후에 시작해야 마음이 편하다.",
    B: "계획을 확정하지 않고 가능성을 열어둔 채로 일단 시작한다."
  },
  9: {
    title: "친구가 어제 본 영화에 대해 물어볼 때",
    type: "SN",
    A:
      "고등학교 친구들이 성인이 되어 만나는데 그 이후의 사랑, 갈등을 다룬 영화야",
    B: "주인공이 진짜 멋있어! 맥주 마시면서 가볍게 보기 좋은 영화야"
  },

  10: {
    title: "주말 약속이 꽉 찼을 때",
    type: "EI",
    A: "이번주말도 알차게 보내겠군 ! 신난다 !!",
    B: "주말 중 최소 하루는 집에서 쉬어야하는데...어쩌지"
  },
  11: {
    title:
      "친구가 잦은 실수로 인해 상사에게 크게 혼났다며 슬퍼할 때 내 반응은?",
    type: "TF",
    A: "일단 위로는 해주지만 속으로는 친구에게 잘못이 있다고 생각한다.",
    B: "친구가 얼마나 속상했을지 공감하며 위로한다."
  },
  12: {
    title: "나는 여행을 계획할 때",
    type: "JP",
    A: "일자별로 세부 일정을 꼼꼼하게 정리해둔다.",
    B: "비행기표를 끊었으면 계획의 70%는 끝났다고 생각한다."
  }
};

var SN = 0;
var EI = 0;
var TF = 0;
var JP = 0;

function next() {
  if (num == 13) {
    question.className = "page none";
    answer.className = "page show";
    var mbti = "";
    if (EI >= 2) {
      mbti += "E";
    } else {
      mbti += "I";
    }
    if (SN >= 2) {
      mbti += "S";
    } else {
      mbti += "N";
    }
    if (TF >= 2) {
      mbti += "T";
    } else {
      mbti += "F";
    }
    if (JP >= 2) {
      mbti += "J";
    } else {
      mbti += "P";
    }
    answer.querySelector("#result").textContent = mbti;
  } else {
    question.querySelector("#q").textContent = questions[num]["title"];
    question.querySelector("#a1").textContent = questions[num]["A"];
    question.querySelector("#a2").textContent = questions[num]["B"];
    num++;
  }
}

function a1() {
  const type = questions[num - 1]["type"];
  switch (type) {
    case "SN":
      SN++;
      break;
    case "EI":
      EI++;
      break;
    case "TF":
      TF++;
      break;
    case "JP":
      JP++;
      break;
  }
  next();
}

function a2() {
  next();
}

function st() {
  start.className = "page none";
  question.className = "page show";
  next();
}

function re() {
  answer.className = "page none";
  start.className = "page show";
  num = 1;
  SN = 0;
  EI = 0;
  TF = 0;
  JP = 0;
}