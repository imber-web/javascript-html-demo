function BFS(root) {
  const queue = []
  queue.push(root)
  while (queue.length) {
    const top = queue[0]
    if (top.left) {
      queue.push(top.left)
    }
    if (top.right) {
      queue.push(top.right)
    }
    queue.shift()
  }
}
