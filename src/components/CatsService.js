
class CatService {
  async fetchCats(perPage, category) {
    const url = this.mountUrl(perPage, category);
    
    return fetch(url).then(response => {
      return response.text().then(data => {
        let responseDoc = new DOMParser().parseFromString(data, 'application/xml');
        return Array.from(responseDoc.getElementsByTagName('url'));
      });
    });
  }

  mountUrl(perPage = 10, category) {
    let url = `https://api.thecatapi.com/api/images/get?&results_per_page=${perPage}&type=jpg,png&format=xml&page=0&order=desc`;
    url = new URL(url);

    if (category) {
      url.searchParams.append('category', category);
    }

    return url.href;
  }
}

export default new CatService();