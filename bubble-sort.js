function bubbleSort(arr) {
  let index = arr.length - 1;
  for (let loop = index; loop > 0; --loop) { // 루프
    console.log('loop: ', loop);
    for (let comp = 0; comp < loop; ++comp) { // comp < loop: 한 루프당 마지막 항목은 정렬이 완성되므로 제외
      console.log('comp:', comp);
      if (arr[comp] > arr[comp + 1]) { // 최소인덱스와 다음인덱스값을 비교해서 최소인덱스가 크면 자리 바꿈
        [arr[comp], arr[comp + 1]] = [arr[comp + 1], arr[comp]];
        console.log('changed arr: ', arr);
      }
    }
  }


}

const arr = [4, 3, 2, 1];
bubbleSort(arr);

/*
loop:  3
comp: 0
changed arr:  (4) [3, 4, 2, 1]
comp: 1
changed arr:  (4) [3, 2, 4, 1]
comp: 2
changed arr:  (4) [3, 2, 1, 4]
loop:  2
comp: 0
changed arr:  (4) [2, 3, 1, 4]
comp: 1
changed arr:  (4) [2, 1, 3, 4]
loop:  1
comp: 0
changed arr:  (4) [1, 2, 3, 4]
*/