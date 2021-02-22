const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerHTML = title;
    };
    useEffect(updateTitle, [title]);

    return setTitle;
};

//   function App() {
//     const titleUpdater = useTitle("loading");
//     setTimeout(() => titleUpdater("home"), 3000);
//     return (
//       <div className="App">
//         <div>h1</div>
//       </div>
//     );
//   }