'use strict'

// Cards

class MenuCard {
    constructor(src, title, descr, parentSelector, button, ...classes) {
        this.src = src;
        this.title = title;
        this.descr = descr;
        this.parent = document.querySelector(parentSelector);
        this.button = button;
        this.classes = classes;
    }

    render() {
        const element = document.createElement('div')

        if (this.classes.length === 0) {
            this.classes = "con_1"
            element.classList.add(this.classes)
        } else {
            this.classes.forEach(className => element.classList.add(className))
        }

        element.innerHTML = `
            <div class="img"><img src=${this.src}></div>
            <div class="text">
                <h2>${this.title}</h2>
                <p>${this.descr}</p>
                <button>${this.button}</button>
            </div>
        `
        this.parent.append(element)
    }
}

new MenuCard(
    "./img/card-1.png",
    "Как Провести выходные в Финляндии?",
    "В заключении добавлю, автоматизм дает конфликтный аутизм. В заключении добавлю, конформность отражает код.",
    ".container_1",
    "ЧИТАТЬ"
).render()

new MenuCard(
    "./img/card-2.png",
    "Зеркальный рефрен — национальная задача",
    "Плотностная компонентная форма диссонирует контрапункт контрастных фактур. Как отмечает Теодор Адорно, микрохроматический интервал неизменяем.",
    ".container_1",
    "ЧИТАТЬ"
).render()

new MenuCard(
    "./img/card-3.png",
    "Структурализм как бабувизм",
    "Ощущение мира осмысленно рассматривается трагический предмет деятельности. Аксиома силлогизма иллюзорна. Согласно предыдущему.",
    ".container_1",
    "ЧИТАТЬ"
).render()

new MenuCard(
    "./img/card-4.png",
    "Первоначальный горизонт ожидания",
    "Социальная психология искусства готично использует структурализм. Переходное состояние изящно образует суггестивный синтаксис искусства.",
    ".container_1",
    "ЧИТАТЬ"
).render()



// const sliderPrev= document.querySelector(".slider-prev"),
//         sliderNext = document.querySelector(".slider-next");

//     sliderNext.addEventListener('click', () => {
        
//     })

//     sliderPrev.addEventListener('click', () => {
        
//     })\

