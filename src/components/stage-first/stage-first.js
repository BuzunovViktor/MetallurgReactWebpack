import React, { Component } from 'react'

import './stage-first.css'

export default class FirstStage extends Component {

    state = {
        data: {},
        count_question: 10,
        count_question_correct: 0
    }

    componentWillMount() {
        this.updataQuestion()
    }

    data = [
        { 
            question: 'Свойства металлов и сплавов, характеризующие способность подвергаться обработке в холодном и горячем состояниях, называются ...',
            answer_correct: 'Технологические свойства определяют при технологических пробах, которые дают качественную оценку пригодности металлов к тем или иным способам обработки.', 
            options: [
                { label: 'технологическими', id: 1, status: 'default' }, 
                { label: 'химическими', id: 2, status: 'default' },  
                { label: 'физическими', id: 3, status: 'default' }, 
                { label: 'механическими', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        {
            question: 'Свойства металлов и сплавов, характеризующие способность сопротивляться воздействию внешних сил, называются …',
            answer_correct: 'К основным механическим свойствам относят прочность, пластичность, твердость, ударную вязкость и упругость.', 
            options: [
                { label: 'технологическими', id: 1, status: 'default' }, 
                { label: 'химическими', id: 2, status: 'default' },  
                { label: 'физическими', id: 3, status: 'default' }, 
                { label: 'механическими', id: 4, status: 'default' }
            ], 
            answer_idx: 3,
            answer_user: '',
            active: true
        },

        {
            question: 'Свойства металлов и сплавов, характеризующие способность сопротивляться окислению, называются …',
            answer_correct: 'Металлы – активные восстановители с положительной степенью окисления. Благодаря химическим свойствам металлы широко используются в промышленности, металлургии, медицине, строительстве.', 
            options: [
                { label: 'технологическими', id: 1, status: 'default' }, 
                { label: 'химическими', id: 2, status: 'default' },  
                { label: 'физическими', id: 3, status: 'default' }, 
                { label: 'технологическими', id: 4, status: 'default' },
                { label: 'механическими', id: 5, status: 'default'}
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },

        {
            question: 'К физическим свойствам металлов и сплавов относится:',
            answer_correct: 'Плотность – скалярная физическая величина, определяемая как отношение массы тела к занимаемому этим телом объёму.', 
            options: [
                { label: 'прочность', id: 1, status: 'default' }, 
                { label: 'плотность', id: 2, status: 'default' },  
                { label: 'твёрдость', id: 3, status: 'default' }, 
                { label: 'ударная вязкость', id: 4, status: 'default' }
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },

        {
            question: 'К механическим свойствам металлов и сплавов относится',
            answer_correct: 'Пластичность – свойство металла пластически деформироваться, не разрушаясь под действием внешних сил.', 
            options: [
                { label: 'свариваемость', id: 1, status: 'default' }, 
                { label: 'пластичность', id: 2, status: 'default' },  
                { label: 'температура плавления', id: 3, status: 'default' }, 
                { label: 'плотность', id: 4, status: 'default' },
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },

        {
            question: 'К технологическим свойствам металлов и сплавов относится:',
            answer_correct: 'Ковкость — технологическое свойство материалов, характеризующее их способность к обработке деформированием: ковкой, вальцеванием, штамповкой без разрушения.', 
            options: [
                { label: 'теплопроводность', id: 1, status: 'default' }, 
                { label: 'ударная вязкость', id: 2, status: 'default' },  
                { label: 'ковкость', id: 3, status: 'default' }, 
                { label: 'твёрдость', id: 4, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },

        {
            question: 'К химическим свойствам металлов и сплавов относится:',
            answer_correct: 'Коррозионная стойкость — способность материалов сопротивляться коррозии, определяющаяся скоростью коррозии в данных условиях.', 
            options: [
                { label: 'электропроводность', id: 1, status: 'default' }, 
                { label: 'коррозионная стойкость', id: 2, status: 'default' },  
                { label: 'усадка', id: 3, status: 'default' }, 
                { label: 'температура плавления', id: 4, status: 'default' }
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },

        {
            question: 'Способность металлов и сплавов сопротивляться проникновению в него другого, более твёрдого тела называется...',
            answer_correct: 'Твёрдость — свойство материала сопротивляться внедрению более твёрдого тела — индентора.', 
            options: [
                { label: 'упругостью', id: 1, status: 'default' }, 
                { label: 'твёрдостью', id: 2, status: 'default' },  
                { label: 'прочностью', id: 3, status: 'default' }, 
                { label: 'плотностью', id: 4, status: 'default' },
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },

        { 
            question: 'Способность материала сопротивляться разрушению под действием нагрузок называется …',
            answer_correct: 'Прочностью называется способность металла не поддаваться разрушению под действием внешних нагрузок. Величина прочности указывает, какая сила необходима, чтобы преодолеть внутреннюю связь между молекулами.', 
            options: [
                { label: 'пластичностью', id: 1, status: 'default' }, 
                { label: 'ударной вязкостью', id: 2, status: 'default' },  
                { label: 'прочностью', id: 3, status: 'default' }, 
                { label: 'твёрдостью', id: 4, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },

        {
            question: 'Уменьшение объёма металла при переходе из жидкого состояния в твёрдое называется …',
            answer_correct: 'Усадка является одним из основных показателей, характеризующих литейные свойства металлов (сплавов), поскольку является причиной образования усадочных раковин, пористости, появления внутренних напряжений и т. д', 
            options: [
                { label: 'ковкостью', id: 1, status: 'default' }, 
                { label: 'усадкой', id: 2, status: 'default' },  
                { label: 'жидкотекучестью', id: 3, status: 'default' }, 
                { label: 'температурой плавления', id: 4, status: 'default' }
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },

        /* 10 */

        {
            question: 'Способность металла при нагревании поглащать определённое количество тепла называется …',
            answer_correct: 'Теплоёмкость – это количество теплоты, поглощаемой (выделяемой) всем телом в процессе нагревания (остывания) на 1 Кельвин.', 
            options: [
                { label: 'теплопроводностью', id: 1, status: 'default' }, 
                { label: 'тепловым расширением', id: 2, status: 'default' },  
                { label: 'теплоёмкостью', id: 3, status: 'default' }, 
                { label: 'температурой плавления', id: 4, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },

        {
            question: 'Способность металла принимать новую форму и размеры под действием внешних сил, не разрушаясь, называется … ',
            answer_correct: 'Пластичность – свойство металла пластически деформироваться, не разрушаясь под действием внешних сил.', 
            options: [
                { label: 'пластичностью', id: 1, status: 'default' }, 
                { label: 'ударной вязкостью', id: 2, status: 'default' },  
                { label: 'упругостью', id: 3, status: 'default' }, 
                { label: 'обрабатываемостью', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        {
            question: 'Способность металла восстанавливать первоначальную форму и размеры после прекращения действия нагрузки называется …',
            answer_correct: 'Упругость — свойство металла восстанавливать свою форму и размеры после прекращения действия нагрузки.', 
            options: [
                { label: 'ударной вязкостью', id: 1, status: 'default' }, 
                { label: 'пластичностью', id: 2, status: 'default' },  
                { label: 'прочностью', id: 3, status: 'default' }, 
                { label: 'упругостью', id: 4, status: 'default' }
            ], 
            answer_idx: 3,
            answer_user: '',
            active: true
        },

        {
            question: 'Процесс постепенного накопления повреждений металла под действием повторно-переменных напряжений, приводящий к образованию трещин и разрушению называется …',
            answer_correct: 'Усталость металлов - явление изменения механических свойств материала под влиянием переменных нагрузок и вибраций.', 
            options: [
                { label: 'тепловым расширением', id: 1, status: 'default' }, 
                { label: 'усталостью', id: 2, status: 'default' },  
                { label: 'ударной вязкостью', id: 3, status: 'default' }, 
                { label: 'усадкой', id: 4, status: 'default' }
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },

        {
            question: 'Чугун от стали отличается …',
            answer_correct: 'Чугун — сплав железа с углеродом (и другими элементами), в котором содержание углерода не менее 2,14 %, а сплавы с содержанием углерода менее 2,14 % называются сталью.', 
            options: [
                { label: 'различным содержанием углерода', id: 1, status: 'default' }, 
                { label: 'прочностью', id: 2, status: 'default' },  
                { label: 'твёрдостью', id: 3, status: 'default' }, 
                { label: 'литейными свойствами', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        {
            question: 'Чугун выплавляют в…',
            answer_correct: 'Доменная печь — большая металлургическая вертикально расположенная печь шахтного типа для выплавки чугуна и ферросплавов из железорудного сырья.', 
            options: [
                { label: 'доменных печах', id: 1, status: 'default' }, 
                { label: 'мартеновских печах', id: 2, status: 'default' },  
                { label: 'кислородных конверторах', id: 3, status: 'default' }, 
                { label: 'электропечах', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        {
            question: 'Вредными примесями при производстве стали и чугуна являются:',
            answer_correct: 'Фосфор повышает жидкотекучесть чугуна. Сера затрудняет графитизацию, увеличивает хрупкость и ухудшает жидкотекучесть чугуна.', 
            options: [
                { label: 'сера и фосфор', id: 1, status: 'default' }, 
                { label: 'кремний и марганец', id: 2, status: 'default' },  
                { label: 'углерод и кислород', id: 3, status: 'default' }, 
                { label: 'все примеси вредные', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        {
            question: 'Сталь, содержащая в своём составе углерод, марганец, кремний,  серу и фосфор называется …',
            answer_correct: 'Углеродистая сталь отличается содержанием углерода до 2,14% без наличия легирующих элементов, небольшим количеством примесей в составе, и небольшим содержанием магния, кремния и марганца.', 
            options: [
                { label: 'легированной', id: 1, status: 'default' }, 
                { label: 'углеродистой', id: 2, status: 'default' },  
                { label: 'специальной', id: 3, status: 'default' }, 
                { label: 'с особыми свойствами', id: 4, status: 'default' }
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },

        {
            question: 'Углеродистые стали, содержащие до 0,25% углерода называются …',
            answer_correct: 'Сталь низкоуглеродистая – сплав, не содержащий легируемых элементов, имеющий примеси марганца – не больше 1%, кремния – не выше 0,8% и малое содержание углерода, до 0,25%.', 
            options: [
                { label: 'низкоуглеродистыми', id: 1, status: 'default' }, 
                { label: 'среднеуглеродистыми', id: 2, status: 'default' },  
                { label: 'высокоуглеродистыми', id: 3, status: 'default' }, 
                { label: 'с повышенным содержанием углерода', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        {
            question: 'Сталь, в состав которой вводят специальные элементы для придания ей требуемых свойств, называется … ',
            answer_correct: 'Легированная сталь включает в себя разные легирующие элементы - азот, медь, никель, хром, ванадий. Также эти элементы значительно повышают стойкость к коррозии, стойкость к хрупкости и повышают прочность.', 
            options: [
                { label: 'легированной', id: 1, status: 'default' }, 
                { label: 'углеродистой', id: 2, status: 'default' },  
                { label: 'кипящей', id: 3, status: 'default' }, 
                { label: 'высокоуглеродистой', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        /* 20 */

        
        {
            question: 'Какой металл не является цветным?',
            answer_correct: 'Цветные металлы — особый класс нержавеющих металлов и сплавов, в составе которых нет железа. Они отличаются прочностью и долговечностью, поскольку формируют на своей поверхности защитную оксидную пленку и проявляют устойчивость к негативным факторам внешней среды.', 
            options: [
                { label: 'золото', id: 1, status: 'default' }, 
                { label: 'медь', id: 2, status: 'default' },  
                { label: 'вольфрам', id: 3, status: 'default' }, 
                { label: 'железо', id: 4, status: 'default' }
            ], 
            answer_idx: 3,
            answer_user: '',
            active: true
        },

        {
            question: 'Какой из перечисленных цветных металлов является самым легкоплавким?',
            answer_correct: 'Легкоплавкие сплавы — это, как правило, эвтектические металлические сплавы, имеющие низкую температуру плавления, не превышающую температуру плавления олова (231,9 °C).', 
            options: [
                { label: 'алюминий', id: 1, status: 'default' }, 
                { label: 'медь', id: 2, status: 'default' },  
                { label: 'олово', id: 3, status: 'default' }, 
                { label: 'свинец', id: 4, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },

        {
            question: 'Какой из перечисленных цветных металлов имеет наилучшую электропроводность?',
            answer_correct: 'Наибольшую электропроводность из всех металлов имеет серебро. При комнатной температуре его удельное электрическое сопротивление составляет 0,0150 мкОм´м.', 
            options: [
                { label: 'медь', id: 1, status: 'default' }, 
                { label: 'алюминий', id: 2, status: 'default' },  
                { label: 'железо', id: 3, status: 'default' }, 
                { label: 'серебро', id: 4, status: 'default' }
            ], 
            answer_idx: 3,
            answer_user: '',
            active: true
        },

        {
            question: 'Процесс термообработки, заключающийся в нагреве стали до определённой температуры, выдержке и последующим медленном охлаждении  вместе с печью, называется …',
            answer_correct: 'Цель отжига — снижение твёрдости для облегчения механической обработки, улучшение микроструктуры и достижение большей однородности металла, снятие внутренних напряжений', 
            options: [
                { label: 'закалкой', id: 1, status: 'default' }, 
                { label: 'отпуском', id: 2, status: 'default' },  
                { label: 'отжигом', id: 3, status: 'default' }, 
                { label: 'нормализацией', id: 4, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },

        {
            question: 'Процесс термообработки, заключающийся в нагреве стали до температур, превышающих фазовые превращения, выдержке и последующим быстрым охлаждением называется …',
            answer_correct: ' В процессе закалки металл становится более твердым, но одновременно уменьшается его пластичность и вязкость, особенно, если цикл «нагревание-охлаждение» повторять много раз.', 
            options: [
                { label: 'закалкой', id: 1, status: 'default' }, 
                { label: 'отпуском', id: 2, status: 'default' },  
                { label: 'отжигом', id: 3, status: 'default' }, 
                { label: 'нормализацией', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        {
            question: 'Процесс термообработки, заключающийся в нагреве стали до температуры 800-11500, выдержке и последующим охлаждением на воздухе, называется …',
            answer_correct: '', 
            options: [
                { label: 'закалкой', id: 1, status: 'default' }, 
                { label: 'отпуском', id: 2, status: 'default' },  
                { label: 'отжигом', id: 3, status: 'default' }, 
                { label: 'нормализацией', id: 4, status: 'default' }
            ], 
            answer_idx: 3,
            answer_user: '',
            active: true
        },

        {
            question: 'Процесс термообработки, применяемый после закалки, и заключающийся в нагреве стали, выдержке и последующим охлаждением, называется …',
            answer_correct: 'Отпуском металла называется технологический процесс термообработки закалённого стального сплава. Он даёт возможность завершить фазовые превращения в микроструктуре (мартенсите), которая приобретает наиболее устойчивое состояние.', 
            options: [
                { label: 'закалкой', id: 1, status: 'default' }, 
                { label: 'отпуском', id: 2, status: 'default' },  
                { label: 'отжигом', id: 3, status: 'default' }, 
                { label: 'нормализацией', id: 4, status: 'default' }
            ], 
            answer_idx: 1,
            answer_user: '',
            active: true
        },

        {
            question: 'Процесс насыщения углеродом поверхностного слоя стали при нагреве в соответствующей среде называется …',
            answer_correct: 'Цементация стали – это высокотемпературный процесс, сопровождающийся насыщением поверхности атомарным углеродом. В результате повышаются качественные характеристики верхнего слоя изделия, в частности крепость, что увеличивает стойкость к различным нагрузкам. ', 
            options: [
                { label: 'азотированием', id: 1, status: 'default' }, 
                { label: 'нитроцементацией', id: 2, status: 'default' },  
                { label: 'цианированием', id: 3, status: 'default' }, 
                { label: 'цементацией', id: 4, status: 'default' }
            ], 
            answer_idx: 3,
            answer_user: '',
            active: true
        },

        {
            question: 'Металлом является...',
            answer_correct: 'Хром – твердый металл голубовато-белого цвета. Хром иногда относят к черным металлам. Этот металл способен окрашивать соединения в разные цвета, поэтому и был назван «хром», что означает «краска»', 
            options: [
                { label: 'селен', id: 1, status: 'default' }, 
                { label: 'йод', id: 2, status: 'default' },  
                { label: 'хром', id: 3, status: 'default' }, 
                { label: 'фосфор', id: 4, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },

        {
            question: 'Какой металл образно называют «металлом хирургов»?',
            answer_correct: 'Металлом хирургов называют тантал. Тантал высокой чистоты совершенно незаменим в хирургии, так как обладает замечательным свойством: вшитый в живые ткани (мышцы и кости) он не раздражает их.', 
            options: [
                { label: 'тантал', id: 1, status: 'default' }, 
                { label: 'ванадий', id: 2, status: 'default' },  
                { label: 'серебро', id: 3, status: 'default' }, 
                { label: 'титан', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        /* 30 */

        {
            question: 'При Петре I вручалась медаль за пьянство введенная в 1714 году, цель которого была борьба против пьянства. Из чего она была сделана?',
            answer_correct: ' С целью борьбы против пьянства, Петром I в 1714 году выдавалась чугунная медаль «За пьянство». Вес медали составлял 6,8 кг, не считая цепей. Она считается самой тяжелой медалью в истории.', 
            options: [
                { label: 'Из чугуна', id: 1, status: 'default' }, 
                { label: 'Из свинца', id: 2, status: 'default' },  
                { label: 'Из стали', id: 3, status: 'default' }, 
                { label: 'Из меди', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        {
            question: 'Какие металлы жидкие при обычной температуре?',
            answer_correct: 'Ртуть -  единственный в природе металл, который при комнатной температуре представляет собой тяжелую серебристо-белую жидкость. Ее пары чрезвычайно ядовиты', 
            options: [
                { label: 'магний', id: 1, status: 'default' }, 
                { label: 'натрий', id: 2, status: 'default' },  
                { label: 'ртуть', id: 3, status: 'default' }, 
                { label: 'серебро', id: 4, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },

        {
            question: 'Какой химический элемент не относится к щелочным металлам?',
            answer_correct: 'Щелочные металлы – это элементы главной подгруппы первой группы периодической таблицы системы химических элементов Д.И. Менделеева. При растворении щелочных металлов в воде образуются растворимые гидроксиды, называемые щелочами. Это литий Li, натрий Na, калий K, цезий Cs, рубидий Rb и франций Fr. Магний является элементом второй группы, третьего периода. ', 
            options: [
                { label: 'натрий', id: 1, status: 'default' }, 
                { label: 'калий', id: 2, status: 'default' },  
                { label: 'литий', id: 3, status: 'default' }, 
                { label: 'магний', id: 4, status: 'default' }
            ], 
            answer_idx: 3,
            answer_user: '',
            active: true
        },

        {
            question: 'Какой металл является самым тяжелым?',
            answer_correct: 'Осмий - яркий представитель крайне редких драгоценных металлов, блестящего серебристо-белого цвета с голубым отливом. Его плотность составляет 22,61 г/см3. Осмий один из тяжелых металлов на земле. ', 
            options: [
                { label: 'Осмий', id: 1, status: 'default' }, 
                { label: 'Молибден', id: 2, status: 'default' },  
                { label: 'Вольфрам', id: 3, status: 'default' }, 
                { label: 'Свинец', id: 4, status: 'default' }
            ], 
            answer_idx: 0,
            answer_user: '',
            active: true
        },

        {
            question: 'Какой металл является самым распространенным на земле?',
            answer_correct: 'По распространенности в природе алюминий занимает 3-е место после кислорода и кремния и 1-е - среди металлов. На его долю приходится более 8,5% всей земной коры.', 
            options: [
                { label: 'магний', id: 1, status: 'default' }, 
                { label: 'олово', id: 2, status: 'default' },  
                { label: 'алюминий', id: 3, status: 'default' }, 
                { label: 'железо', id: 4, status: 'default' }
            ], 
            answer_idx: 2,
            answer_user: '',
            active: true
        },

    ]

    onClickOption = (id) => {
        const idx = this.state.data.options.findIndex((el) => el.id === id)
        if(this.state.data.active) {
            this.setState(({data, count_question_correct}) => { 

                if(idx === data.answer_idx) {
                    const new_option = {...data.options[idx], status: 'default correct'}
                    const new_options = [...data.options]
                    new_options.splice(idx, 1, new_option)
                    const new_data = { ...data, active : false, options: new_options, answer_user: true, answer_user: 'correct' }

                    return {
                        count_question_correct: count_question_correct + 1,
                        data: new_data
                    }

                } else {
                    const new_option = {...data.options[idx], status: 'default not_correct'}
                    const new_correct_option = {...data.options[data.answer_idx], status: 'default correct'}

                    const new_options = [...data.options]
                    new_options.splice(idx, 1, new_option)
                    new_options.splice(data.answer_idx, 1, new_correct_option)

                    const new_data = { ...data, active : false, options: new_options, answer_user: 'not_correct'}

                    return {
                        data: new_data
                    }  
                }
            })
        }
    }

    onClickNext = () => {
        if(this.state.data.answer_user !== '') {
            if(this.state.count_question > 0) {
                this.updataQuestion()           
            } else {
                this.props.onClickPage('stage_second')
                this.props.updataCountCorrect(this.state.count_question_correct)
            } 
        }
        
    }

    updataQuestion = async () => {
        const idx = Math.floor(Math.random() * this.data.length)
        await this.setState(({data, count_question }) => {
            return {
                count_question : count_question - 1,
                data: this.data[idx]
            }
        })
        this.data.splice(idx, 1)
    }

    render() {
        const {question, options, answer_correct, answer_user } = this.state.data

        const answer_span_correct = answer_user === 'correct' ? <span className="answer_span_correct">Правильно!</span> : null
        const answer_span_not_correct = answer_user === 'not_correct' ? <span className="answer_span_not_correct"> Не совсем так.</span> : null

        const option_items = options.map((option) => {
            return (
                <div className={option.status}
                    key={option.id}
                    onClick={() => this.onClickOption(option.id)}>
                    <span>{option.label}</span>
                </div>
            )
        })

        let className_answer = 'answer'
        let className_button = ''
        if(answer_user !== '') {
            className_answer += ' active'
            className_button += 'active'
        }

        return (
            <div className="stage-first">
                <h1>Первый тур</h1>

                <h2 className="task">Выберите правильный ответ</h2>

                <p>
                    Каждый металловед отличается острым умом и поразительной сообразительностью!
                    Выберите правильный ответ на вопросы из области физики и химии.
                </p>

                <h2 className="question">{question}</h2>

                <div className="content">
                    {option_items}
                </div>

                <div className={className_answer}>
                    <p>
                        {answer_span_correct}
                        {answer_span_not_correct}<br />
                        {answer_correct}
                    </p>
                </div>

                <div className="button">
                    <button className={className_button}
                        onClick={this.onClickNext}>Далее</button>                    
                </div>

            </div>
        )
    }
}