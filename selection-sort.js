function selectionSort(arr) {
  for (let loop = 0; loop < arr.length - 1; ++loop) { // arr.length -1: 기준 제외한 비교대상의 개수만큼 루프
    let minIndex = loop; // 비교기준
    console.log('loop: ', loop);
    console.log('minIndex: ', minIndex);
    for (let comp = loop + 1; comp < arr.length; ++comp) { // comp = loop + 1 : 한 루프당 첫 항목은 정렬이 완성되므로 제외
      console.log('comp: ', comp);
      if (arr[minIndex] > arr[comp]) {
        minIndex = comp;
      }
    }
    console.log('changed minIndex: ', minIndex);

    if (loop != minIndex) { // 최소값의 인덱스가 변경된 경우만
      [arr[minIndex], arr[loop]] = [arr[loop], arr[minIndex]]; // 루프당 한번만 자리를 바꾼다. 
      console.log('changed arr: ', arr);
    }

  }

}

const arr = [4, 3, 2, 1];
selectionSort(arr);

/*
loop:  0
minIndex:  0
comp:  1
comp:  2
comp:  3
changed minIndex:  3
changed arr:  (4) [1, 3, 2, 4]
loop:  1
minIndex:  1
comp:  2
comp:  3
changed minIndex:  2
changed arr:  (4) [1, 2, 3, 4]
loop:  2
minIndex:  2
comp:  3
changed minIndex:  2
 */