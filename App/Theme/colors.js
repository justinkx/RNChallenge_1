const colors = {
    homeBackground: '#f3f8ff',
    violet: '#8e91f3',
    message: '#f7f8fe',
    badge: '#f8a5a5',
    text: '#6a6b93',
    subTitle: '#bcc5d0',
    search: '#9aa8ba'
}
export const getRandomColor =()=> {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
export default colors;