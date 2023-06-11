export function getAllPost(id) {
  const postData = [
    { id: 1, title: "New Post", description: "Post Data From Static Props" },
    { id: 2, title: "Second Post", description: "Post Data From Static Props" },
  ];

  if (id) {
    return postData.filter((post) => post.id == id);
  }

  return postData;
}
