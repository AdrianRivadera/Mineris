export default function BtnClose() {

    const cerrarDesplegable = () => {

        const menuDesplegable = document.getElementById('desplegable');
        const containerImg = document.getElementById('container-img');
        const containerText = document.getElementById('container-text-desplegable');

        if (menuDesplegable) {
            menuDesplegable.classList.add('ocultarDesplegable');
            containerImg.classList.add('ocultarImgDesplegable');
            containerText.classList.add('ocultarImgDesplegable');
        }
    };

    return (
        <div 
            className="absolute top-[10rem] right-10 lg:right-32 cursor-pointer z-40" 
            onClick={cerrarDesplegable}
        >
            <svg width="50" height="50" fill="black" className="bi bi-x" viewBox="0 0 20 20">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
            </svg>
        </div>
    )
}
