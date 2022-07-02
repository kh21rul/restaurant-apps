const templateListData = (data) => {
    let li = '';
    data.forEach((objectData) => {
        li += `<li>${objectData.name}</li>`;
    });
    return li;
};

const templateListDataReviews = (data) => {
    let li = '';
    data.forEach((reviewData) => {
        li += `
    <li class="review">
        <ul>
            <li class="reviewer-name">${reviewData.name}</li>
            <li class="reviewer-date">Date : ${reviewData.date}</li>
            <li class="reviewer-message">Pesan : ${reviewData.review}</li>
        </ul>
    </li>`;
    });
    return li;
};

export {
    templateListData,
    templateListDataReviews,
};