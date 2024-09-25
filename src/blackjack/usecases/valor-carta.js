/**
 * Obtener el valor de la carta
 * @param {string} carta nombre de la carta
 * @returns {number} valor de la carta
 */
export const valorCarta = ( carta ) => {

    if (!carta) 
        throw new Error('la carta es obligatoria')

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}