const modalContainer = document.querySelector(".modal-container");
const createBlog = document.getElementById("create-blog");
const blogs = document.querySelector(".blogs");
const addBlog = document.getElementById("add-blog");
const cancel = document.querySelector(".modal span");

const demoBlogPosts = [
  {
    url: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1752&q=80",
    title: "Nature",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse, cupiditate pariatur adipisci maiores fugit optio autem modi? Molestias, ex at velit recusandae officiis reiciendis nostrum voluptatem distinctio libero suscipit, quae provident illo sit. Cupiditate odio autem corporis assumenda id blanditiis. Quaerat non dolor voluptatem corporis? Exercitationem enim eum ducimus, minus doloremque consectetur perspiciatis incidunt eaque laborum accusantium modi praesentium nulla cupiditate iste sint totam harum voluptates eveniet autem ut, atque inventore odit. Excepturi, voluptatum dicta laboriosam et natus voluptate saepe tempore, nobis, earum sit aliquam ex quod mollitia velit sed dolore reiciendis. Quibusdam laudantium eveniet voluptas nesciunt adipisci ipsum! Odio distinctio suscipit pariatur iste laborum, saepe aspernatur reiciendis! At illum deserunt consequatur fugit neque quae, provident perspiciatis, excepturi non sunt earum porro nostrum? Similique voluptates quisquam quos neque nobis aliquid omnis esse, tempore maiores ducimus eaque quo molestiae iste dolorum minus obcaecati deserunt, inventore repudiandae quia, dolore aperiam? Quas neque cumque accusamus? Quo rerum, odio placeat aperiam corrupti magni aliquid libero illo vero similique molestias, mollitia animi consequatur ea, hic quod explicabo quidem! Quae reprehenderit maiores amet iste dolorem? Consectetur quis aliquam error expedita veniam iste quos sit molestias consequuntur impedit dicta sapiente perspiciatis dolorem exercitationem necessitatibus commodi quia aspernatur illum a harum libero, qui labore, mollitia quas. Veritatis nesciunt suscipit laudantium harum ex repellendus molestiae accusamus, ad debitis repellat vero ea asperiores odio dolorem illo culpa quas dignissimos autem iusto adipisci, neque nemo commodi nisi? Est ad, culpa cupiditate assumenda veritatis et aliquam nihil facilis dolore, provident, doloribus dolorem voluptatem magni ut magnam harum quae sequi! Mollitia asperiores, sit ipsa iste temporibus alias fuga numquam. Quis, aliquid! Ipsam incidunt id officiis dolore neque totam nobis mollitia? Unde dolorum quo minus pariatur ut a accusantium?",
  },
  {
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
    title: "Machine",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse.",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse, cupiditate pariatur adipisci maiores fugit optio autem modi? Molestias, ex at velit recusandae officiis reiciendis nostrum voluptatem distinctio libero suscipit, quae provident illo sit. Cupiditate odio autem corporis assumenda id blanditiis. Quaerat non dolor voluptatem corporis? Exercitationem enim eum ducimus, minus doloremque consectetur perspiciatis incidunt eaque laborum accusantium modi praesentium nulla cupiditate iste sint totam harum voluptates eveniet autem ut, atque inventore odit. Excepturi, voluptatum dicta laboriosam et natus voluptate saepe tempore, nobis, earum sit aliquam ex quod mollitia velit sed dolore reiciendis. Quibusdam laudantium eveniet voluptas nesciunt adipisci ipsum! Odio distinctio suscipit pariatur iste laborum, saepe aspernatur reiciendis! At illum deserunt consequatur fugit neque quae, provident perspiciatis, excepturi non sunt earum porro nostrum? Similique voluptates quisquam quos neque nobis aliquid omnis esse, tempore maiores ducimus eaque quo molestiae iste dolorum minus obcaecati deserunt, inventore repudiandae quia, dolore aperiam? Quas neque cumque accusamus? Quo rerum, odio placeat aperiam corrupti magni aliquid libero illo vero similique molestias, mollitia animi consequatur ea, hic quod explicabo quidem! Quae reprehenderit maiores amet iste dolorem? Consectetur quis aliquam error expedita veniam iste quos sit molestias consequuntur impedit dicta sapiente perspiciatis dolorem exercitationem necessitatibus commodi quia aspernatur illum a harum libero, qui labore, mollitia quas. Veritatis nesciunt suscipit laudantium harum ex repellendus molestiae accusamus, ad debitis repellat vero ea asperiores odio dolorem illo culpa quas dignissimos autem iusto adipisci, neque nemo commodi nisi? Est ad, culpa cupiditate assumenda veritatis et aliquam nihil facilis dolore, provident, doloribus dolorem voluptatem magni ut magnam harum quae sequi! Mollitia asperiores, sit ipsa iste temporibus alias fuga numquam. Quis, aliquid! Ipsam incidunt id officiis dolore neque totam nobis mollitia? Unde dolorum quo minus pariatur ut a accusantium?",
  },
  {
    url: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1696&q=80",
    title: "Robot",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse.",
    content: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil amet veritatis consequuntur similique aliquam, praesentium blanditiis iure, quod fugiat tempore eos a ab esse, cupiditate pariatur adipisci maiores fugit optio autem modi? Molestias, ex at velit recusandae officiis reiciendis nostrum voluptatem distinctio libero suscipit, quae provident illo sit. Cupiditate odio autem corporis assumenda id blanditiis. Quaerat non dolor voluptatem corporis? Exercitationem enim eum ducimus, minus doloremque consectetur perspiciatis incidunt eaque laborum accusantium modi praesentium nulla cupiditate iste sint totam harum voluptates eveniet autem ut, atque inventore odit. Excepturi, voluptatum dicta laboriosam et natus voluptate saepe tempore, nobis, earum sit aliquam ex quod mollitia velit sed dolore reiciendis. Quibusdam laudantium eveniet voluptas nesciunt adipisci ipsum! Odio distinctio suscipit pariatur iste laborum, saepe aspernatur reiciendis! At illum deserunt consequatur fugit neque quae, provident perspiciatis, excepturi non sunt earum porro nostrum? Similique voluptates quisquam quos neque nobis aliquid omnis esse, tempore maiores ducimus eaque quo molestiae iste dolorum minus obcaecati deserunt, inventore repudiandae quia, dolore aperiam? Quas neque cumque accusamus? Quo rerum, odio placeat aperiam corrupti magni aliquid libero illo vero similique molestias, mollitia animi consequatur ea, hic quod explicabo quidem! Quae reprehenderit maiores amet iste dolorem? Consectetur quis aliquam error expedita veniam iste quos sit molestias consequuntur impedit dicta sapiente perspiciatis dolorem exercitationem necessitatibus commodi quia aspernatur illum a harum libero, qui labore, mollitia quas. Veritatis nesciunt suscipit laudantium harum ex repellendus molestiae accusamus, ad debitis repellat vero ea asperiores odio dolorem illo culpa quas dignissimos autem iusto adipisci, neque nemo commodi nisi? Est ad, culpa cupiditate assumenda veritatis et aliquam nihil facilis dolore, provident, doloribus dolorem voluptatem magni ut magnam harum quae sequi! Mollitia asperiores, sit ipsa iste temporibus alias fuga numquam. Quis, aliquid! Ipsam incidunt id officiis dolore neque totam nobis mollitia? Unde dolorum quo minus pariatur ut a accusantium?`,
  },
];
// const pos = JSON.parse(localStorage.getItem("BlogDetails"));
//console.log(pos);
// if (pos === null) {
localStorage.setItem("BlogDetails", JSON.stringify(demoBlogPosts));
//}

const getAllPosts = () => {
  let blogPosts = JSON.parse(localStorage.getItem("BlogDetails") || "[]");
  console.log(blogPosts);
  document.querySelectorAll(".blog").forEach((blog) => blog.remove());
  blogPosts.forEach((blogpost, index) => {
    // localStorage.setItem('postIndex', JSON.parse(index));
    let blog = document.createElement("div");
    blog.classList.add("blog");
    blog.innerHTML = `
        <div class="img-cont">
            <img src=${blogpost.url} alt=${blogpost.title}>
        </div>
        <h4>${blogpost.title}</h4>
        <p>${blogpost.description}</p>
        <a href="./BlogDetails/blog.html" onclick="localStorage.setItem('postIndex', JSON.parse(${index}))">Read</a>
    `;
    blogs.appendChild(blog);
  });
};

getAllPosts();

createBlog.onclick = () => {
  modalContainer.classList.add("active");
};

cancel.onclick = () => {
  modalContainer.classList.remove("active");
};

addBlog.onsubmit = (e) => {
  e.preventDefault();
  const title = document.querySelector("#title");
  const description = document.querySelector("#description");
  const content = document.querySelector("#post");
  const url = document.querySelector("#url");

  if (title == "" || description == "" || content == "" || url == "") {
    alert("All field required");
    return;
  }

  let obj = {
    title: title.value,
    description: description.value,
    content: content.value,
    url: url.value,
  };
  let blogpost = JSON.parse(localStorage.getItem("BlogDetails"));
  //console.log(blogpost);
  let array;
  if (blogpost) {
    array = [...blogpost, obj];
  } else {
    array = [obj];
  }

  modalContainer.classList.remove("active");
  localStorage.setItem("BlogDetails", JSON.stringify(array));
  getAllPosts();
};
