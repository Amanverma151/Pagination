// Adding the event listener to the DOM

document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 10;
  const totalContacts = users.length;
  let currentPage = 1;

  function displayContacts(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const contactsToShow = users.slice(startIndex, endIndex);

    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    contactsToShow.forEach((user) => {
      const listItem = document.createElement("li");
      listItem.className = "contact-item cf";
      listItem.innerHTML = `
          <div class="contact-details">
            <img class="avatar" src="${user.image}">
            <h3>${user.name}</h3>
            <span class="email">${user.email}</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined ${user.joined}</span>
          </div>
        `;
      contactList.appendChild(listItem);
    });
  }

  // Updating the pages according to the clicks
  function updatePagination() {
    const totalPages = Math.ceil(totalContacts / itemsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
      const pageLink = document.createElement("a");
      pageLink.href = "#";
      pageLink.textContent = i;
      pageLink.addEventListener("click", function () {
        currentPage = i;
        displayContacts(currentPage);
        updatePagination();
      });

      const listItem = document.createElement("li");
      if (i === currentPage) {
        pageLink.classList.add("active");
      }

      listItem.appendChild(pageLink);
      pagination.appendChild(listItem);
    }
  }

  displayContacts(currentPage);
  updatePagination();

  // Update the total contacts count
  document.getElementById("total").textContent = totalContacts;
});
