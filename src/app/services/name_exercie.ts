
export class NameExercie {
    public adbomen: any[];
    public biceps: any[];
    public espalda: any[];
    public hombros: any[];
    public pectoral: any[];
    public piernas: any[];
    public trapesio: any[];
    public triceps: any[];
    constructor() {
        this.adbomen = [
            {
                'id': 1, 'name': 'Alcance y captura alternativos'
            },
            {
                'id': 2, 'name': 'Cuartel cuarto crunch'
            },
            {
                'id': 3, 'name': 'Curling body via block simulator'
            },
            {
                'id': 4, 'name': 'Doble giro en el banco'
            },
            {
                'id': 5, 'name': 'Flexion del cuerpo con manos y pies'
            },
            {
                'id': 6, 'name': 'La oblique se levanta en los bares paralelos'
            },
            {
                'id': 7, 'name': 'Llevando las piernas a los brazos colgando del travesaño'
            },
            {
                'id': 8, 'name': 'Oblique twist with weight plate'
            },
            {
                'id': 9, 'name': 'Pendiente'
            },
            {
                'id': 10, 'name': 'Pistas laterales de pie'
            },
            {
                'id': 11, 'name': 'Sube el maletero'
            },
            {
                'id': 12, 'name': 'Tocadores de talones alternativos'
            }
        ]
        this.biceps = [
            {
                'id': 1, 'name': 'Colapso en el suelo del maletero'
            },
            {
                'id': 2, 'name': 'Curl con una empuñadora de timbre'
            },
            {
                'id': 3, 'name': 'Curl en el simulador'
            },
            {
                'id': 4, 'name': 'Cursl de barra EZ'
            },
            {
                'id': 5, 'name': 'Curl de agarre cercano sentado en barra'
            },
            {
                'id': 6, 'name': 'Un brazo doblado rizo predicador'
            }
        ]
        this.espalda = [
            { 'id': 1, 'name': 'Arrojar campanillas en la pendiente' },
            { 'id': 2, 'name': 'Tercero' },
            { 'id': 3, 'name': 'Banca inclinada dos brazos tirados' },
            { 'id': 4, 'name': 'Dominada' },
            { 'id': 5, 'name': 'Expulsar el simulador Hummer' },
            { 'id': 6, 'name': 'Extremo de los brazos rectos delbloque superior' },
            { 'id': 7, 'name': 'Fila doblada de barbel' },
            { 'id': 8, 'name': 'Impulso horizontal sobre el simulador' },
            { 'id': 9, 'name': 'Levantando timbre en la mano' },
            { 'id': 10, 'name': 'Maquina de agarre invertida' },
            { 'id': 11, 'name': 'Termina el timbre con una mano' },
            { 'id': 12, 'name': 'Thrust T-shaped on the back muscles in the slope' },
            { 'id': 13, 'name': 'Tira asistida por maquina' },
        ]
        this.hombros = [
            { 'id': 1, 'name': 'Arnold press' },
            { 'id': 2, 'name': 'Barbell bent over row' },
            { 'id': 3, 'name': 'Barbell front raise' },
            { 'id': 4, 'name': 'Bent over reverse fly' },
            { 'id': 5, 'name': 'Cruzar los brazos para bloquear el soporte del simulador' },
            { 'id': 6, 'name': 'Dips' },
            { 'id': 7, 'name': 'Inclined bench press' },
            { 'id': 8, 'name': 'Knee roll-out' },
            { 'id': 9, 'name': 'Lateral raise' },
            { 'id': 10, 'name': 'Levanta los brazos hacia aelante con el bloque inferior de pie' },
            { 'id': 11, 'name': 'Levanten las manos con un timbre' },
            { 'id': 12, 'name': 'Maquina hombros presionar' },
            { 'id': 13, 'name': 'Pulsa el simulador de gimnasio de fuerza martillo' },
            { 'id': 14, 'name': 'Simulador de flexibilidad' },
            { 'id': 15, 'name': 'Standing rope face pull' },
            { 'id': 16, 'name': 'Upright row' }
        ]
        this.pectoral = [
            { 'id': 1, 'name': 'Apertua en maquina' },
            { 'id': 2, 'name': 'Cruzar los brazos para bloquear el soporte' },
            { 'id': 3, 'name': 'Declinar smith machine bench press' },
            { 'id': 4, 'name': 'Enlazar campanas desde detras de la cabeza' },
            { 'id': 5, 'name': 'Mancuernas sobrevolando tu cuerpo' },
            { 'id': 6, 'name': 'Prensa de cofres sentados' },
            { 'id': 7, 'name': 'Presion de pectorales con mancuernas' },
            { 'id': 8, 'name': 'Press de banca con mancuernas' },
            { 'id': 9, 'name': 'Press de banca declinado' },
            { 'id': 10, 'name': 'Press de banca inclinado' },
            { 'id': 11, 'name': 'Press de banca' },
            { 'id': 12, 'name': 'Simulador de fuerza martillo' }
        ]
        this.piernas = [
            { 'id': 1, 'name': 'Jalon_de_pierna_con_cable' },
            { 'id': 2, 'name': 'Levantamiento_de_gluteo' },
            { 'id': 3, 'name': 'Levantamientos_con_una_barbacoa' },
            { 'id': 4, 'name': 'Mutaculo_de_flexibilidad_mintiendo' },
            { 'id': 5, 'name': 'Pata_del_simulador_de_flexibilidad' },
            { 'id': 6, 'name': 'Prensa_de_pierna_inclinada' },
            { 'id': 7, 'name': 'Sancadas' },
            { 'id': 8, 'name': 'Simulador_de_pierna_flexible_mintiendo' },
            { 'id': 9, 'name': 'Squats_en_los_hombros' },
            { 'id': 10, 'name': 'Sumo_de_levantamiento_de_muerte' }
        ]
        this.piernas = [
            { 'id': 1, 'name': 'Camino_a_la_parte_trasera_del_delta' },
            { 'id': 2, 'name': 'Carroceria_del_hombro_delantero_con_barbacoa' },
            { 'id': 3, 'name': 'Cruzar_cables' },
            { 'id': 4, 'name': 'Filas_verticales_del_cable' }
        ]
        this.espalda = [
            { 'id': 1, 'name': 'Brazos_de_extension_con_barro_curvo_por_detras_de_la_cabeza' },
            { 'id': 2, 'name': 'CableV-BarTricepsPushdown' },
            { 'id': 3, 'name': 'Dumbbell-Kickback-copy-1' },
            { 'id': 4, 'name': 'Dumbell-Triceps-Extension' },
            { 'id': 5, 'name': 'exercising-extensión-de-una-mano-con-una-pesa-de-gimnasia-de-detrás-la-cabeza-43826101' },
            { 'id': 6, 'name': 'Extension_de_barra_tricep' },
            { 'id': 7, 'name': 'Extension_de_tricep_con_cable_agarre_neutro' },
            { 'id': 8, 'name': 'Extension_de_triceps_seleccionada' },
            { 'id': 9, 'name': 'Presion_alternativa_de_doblaje_con_la_muñeca_girada' },
            { 'id': 10, 'name': 'Tricep_en_banco' },
            { 'id': 11, 'name': 'TwoArmOverheadSeatedTricepsExtensions' }
        ]
    }
}