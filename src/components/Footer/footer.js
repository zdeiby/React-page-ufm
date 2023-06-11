import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container pt-4" style={{background: 'rgb(0, 176, 246) !important'}}>
        <div className="row">
          <div className="col text-light">
            <h5>UBICACIÓN</h5>
            <h6>Sede Principal</h6>
            <label>Av. Palacé #62 - 45, La Candelaria</label>

            <h5 className="pt-4">UBICACION</h5>
            <div className="p-3">
              <a href="https://www.google.com/maps/place/Unidad+Familia+Medell%C3%ADn/@6.2593029,-75.5647152,17z/data=!3m1!4b1!4m6!3m5!1s0x8e4428eff0815781:0xf53b5e95d5609dfc!8m2!3d6.2592976!4d-75.5621403!16s%2Fg%2F11cnbmzprz?entry=ttu">
                <img width="35" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Google_Maps_icon_%282020%29.svg/1200px-Google_Maps_icon_%282020%29.svg.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col text-light">
            <h5>SIGUENOS</h5>
            <div>
      <a href="https://www.facebook.com/medellin.solidaria/?fref=ts" className='m-2'>
        <svg className="mk-svg-icon" data-name="mk-jupiter-icon-facebook" data-cacheid="icon-6484f78b7cd10" style={{ height: '24px', width: '24px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256-6.4c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm64.057 159.299h-49.041c-7.42 0-14.918 7.452-14.918 12.99v19.487h63.723c-2.081 28.41-6.407 64.679-6.407 64.679h-57.566v159.545h-63.929v-159.545h-32.756v-64.474h32.756v-33.53c0-8.098-1.706-62.336 70.46-62.336h57.678v63.183z"></path>
        </svg>
      </a>
      <a href="https://twitter.com/FamiliaMedellin?lang=es">
        <svg className="mk-svg-icon" data-name="mk-jupiter-icon-twitter" data-cacheid="icon-6484f78b7ce61" style={{ height: '24px', width: '24px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256-6.4c-141.385 0-256 114.615-256 256s114.615 256 256 256 256-114.615 256-256-114.615-256-256-256zm146.24 258.654c-31.365 127.03-241.727 180.909-338.503 49.042 37.069 35.371 101.619 38.47 142.554-3.819-24.006 3.51-41.47-20.021-11.978-32.755-26.523 2.923-41.27-11.201-47.317-23.174 6.218-6.511 13.079-9.531 26.344-10.407-29.04-6.851-39.751-21.057-43.046-38.284 8.066-1.921 18.149-3.578 23.656-2.836-25.431-13.295-34.274-33.291-32.875-48.326 45.438 16.866 74.396 30.414 98.613 43.411 8.626 4.591 18.252 12.888 29.107 23.393 13.835-36.534 30.915-74.19 60.169-92.874-.493 4.236-2.758 8.179-5.764 11.406 8.298-7.535 19.072-12.719 30.027-14.216-1.257 8.22-13.105 12.847-20.249 15.539 5.414-1.688 34.209-14.531 37.348-7.216 3.705 8.328-19.867 12.147-23.872 13.593-2.985 1.004-5.992 2.105-8.936 3.299 36.492-3.634 71.317 26.456 81.489 63.809.719 2.687 1.44 5.672 2.1 8.801 13.341 4.978 37.521-.231 45.313-5.023-5.63 13.315-20.268 23.121-41.865 24.912 10.407 4.324 30.018 6.691 43.544 4.396-8.563 9.193-22.379 17.527-45.859 17.329z"></path>
        </svg>
      </a>
    </div>
          </div>
          <div className="col text-light">
            <h5>PUNTOS DE ATENCIÓN</h5>
            <label><b>Aranjuez</b> - Carrera 50ª No. 93 – 39</label><br />
            <label><b>Castilla</b> - Calle 101 No. 65 – 19</label><br />
            <label><b>Caunces</b> - Carrera 6 AB No. 47 A – 99</label><br />
            <label><b>Estadio</b> - Calle 49B NO. 77C 71</label><br />
            <label><b>La América</b> - Carrera 92 No. 34 D – 93</label><br />
            <label><b>Manrique</b> - Carrera 48 No. 63 - 33</label><br />
            <label><b>Moravia</b> - Carrera 51 B 88 - 6</label><br />
            <label><b>Quintana</b> - Carrera 80 82 60</label><br />
            <label><b>San Javier</b> - Calle 42 C 95 50</label><br /><br /><br /><br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export {Footer};
