function fn ( num, fnCallback ){
  return fnCallback(num)
}

fn(5, a=> a * 10) // 50
