const lightTheme = {
    primary: '#4285F4',
    accent: '#FF0000',
    color: '#333',
    bgColor: '#FAFAFA',
    bgOffset: '#EEE',
    gray: 'gray',
};

const darkTheme = {
    primary: '#4285F4',
    accent: '#FF0000',
    color: '#FAFAFA',
    bgColor: '#000',
    bgOffset: '#333',
    gray: 'gray',
};

const themeChoice = JSON.parse(window.sessionStorage.getItem('portfolio_theme'));

let theme = {};
if(themeChoice){
    theme = lightTheme;
} else {
    theme = darkTheme;
}

export default theme;