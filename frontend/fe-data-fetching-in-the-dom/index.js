// variables

const submitButton = document.getElementById('button');
const statusArea = document.getElementById('status-area');
const status = document.getElementById('status-text');
const statusText = document.getElementById('status-text');
const loader = document.getElementById('loader');
const userList = document.getElementById('user-ul');

//status text
const showStatusUpdates = (statusMessage, isLoading = false) => {
  statusText.innerText = statusMessage;
  if (!isLoading) {
    statusArea.classList.add('hide');
    loader.classList.add('hide');
  } else {
    statusArea.classList.remove('hide');
    loader.classList.remove('hide');
  }
};

const fetchPost = async (userId) => {
  try {
    const userData = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
    const post = await userData.json();
    return post;
  } catch (err) {
    console.log(err);
  }
};

// fetch users with button
submitButton.addEventListener('click', async () => {
  //LOADING BAR
  showStatusUpdates('LOADING...', true);
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error(`HTTP error request: ${response.status}`);
    }

    const users = await response.json();

    // console.log(users);
    //reset list
    userList.innerHTML = '';

    users.forEach((user) => {
      const listItem = document.createElement('li');
      listItem.innerText = user.name;

      const userButton = document.createElement('button');
      userButton.innerText = 'Load Posts';

      userButton.addEventListener('click', async () => {
        // Remove existing post list if already appended
        const existingPostList = listItem.querySelector('ul');
        if (existingPostList) {
          existingPostList.remove();
          return;
        }

        const posts = await fetchPost(user.id);
        const postList = document.createElement('ul');
        posts.forEach((post) => {
          const postItem = document.createElement('li');
          postItem.textContent = post.title;
          postList.appendChild(postItem);
        });

        listItem.appendChild(postList);
      });

      listItem.appendChild(userButton);
      userList.appendChild(listItem);
    });

    showStatusUpdates('Succesfully fetched users', false);
    setTimeout(() => {
      showStatusUpdates('', false);
    }, 3000);
  } catch (err) {
    showStatusUpdates(`Failed to load users: ${err.message}`, false);
    console.error('Fetch error:', err);
  }
});
