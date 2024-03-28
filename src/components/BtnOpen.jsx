import './BtnOpen.css'

export default function BtnOpen() {

    const mostrarDesplegable = () => {

        const menuDesplegable = document.getElementById('desplegable');
        const containerImg = document.getElementById('container-img');
        const containerText = document.getElementById('container-text-desplegable');

        if (menuDesplegable) {
            menuDesplegable.classList.add('desplegableVisible');
            menuDesplegable.classList.remove('ocultarDesplegable');
            containerImg.classList.remove('ocultarImgDesplegable');
            containerText.classList.remove('ocultarImgDesplegable');
        }
    };

    return (
        <div 
            class="hamburger z-50" 
            onClick={mostrarDesplegable}
        >
        <input class="checkbox" type="checkbox" />
        <svg fill="none" viewBox="0 0 50 50" height="32" width="32">
          <path
            class="lineTop line"
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 11L44 11"></path>
          <path
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 24H43"
            class="lineMid line"></path>
          <path
            stroke-linecap="round"
            stroke-width="4"
            stroke="black"
            d="M6 37H43"
            class="lineBottom line"></path>
        </svg>
      </div>
    )
}

