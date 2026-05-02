import clarin1 from '../assets/images/Críticas/Clarin-27-07-1966/escanear0163.jpg';
import clarin2 from '../assets/images/Críticas/Clarin-27-07-1966/escanear0172.jpg';
import elComercio from '../assets/images/Críticas/EL-COMERCIO-20-12-2000/4.jpg';
import elDiario from '../assets/images/Críticas/EL-DIARIO-Lima1984/escanear0183.jpg';
import elDiarioEstas from '../assets/images/Críticas/ESTAS/escanear0192.jpg';
import expreso from '../assets/images/Críticas/EXPRESO-15-05-1984/escanear0186.jpg';
import laCronica from '../assets/images/Críticas/LA-CRONICA-20-05-1984/escanear0185.jpg';
import laRepublica from '../assets/images/Críticas/La-República-Lima-Junio-1998/criticas12.jpg';
import mundoIsraelita from '../assets/images/Críticas/Mundo-Israelita-07-08-76-Cencerro/escanear0173.jpg';

export const publicaciones = [
  {
    id: 'clarin-1966',
    publicacion: 'Clarín',
    fecha: '27 de julio, 1966',
    pais: 'Argentina',
    imagenes: [clarin1, clarin2],
  },
  {
    id: 'mundo-israelita-1976',
    publicacion: 'Mundo Israelita',
    fecha: '7 de agosto, 1976',
    pais: 'Argentina',
    imagenes: [mundoIsraelita],
  },
  {
    id: 'el-diario-1984',
    publicacion: 'El Diario',
    fecha: '1984',
    pais: 'Lima, Perú',
    imagenes: [elDiario, elDiarioEstas],
  },
  {
    id: 'expreso-1984',
    publicacion: 'Expreso',
    fecha: '15 de mayo, 1984',
    pais: 'Lima, Perú',
    imagenes: [expreso],
  },
  {
    id: 'la-cronica-1984',
    publicacion: 'La Crónica',
    fecha: '20 de mayo, 1984',
    pais: 'Lima, Perú',
    imagenes: [laCronica],
  },
  {
    id: 'la-republica-1998',
    publicacion: 'La República',
    fecha: 'Junio, 1998',
    pais: 'Lima, Perú',
    imagenes: [laRepublica],
  },
  {
    id: 'el-comercio-2000',
    publicacion: 'El Comercio',
    fecha: '20 de diciembre, 2000',
    pais: 'Perú',
    imagenes: [elComercio],
  },
];

const archiveGlob = import.meta.glob('../assets/images/Críticas/*.jpg', { eager: true });
export const archivoPrensa = Object.values(archiveGlob).map((m) => m.default);
