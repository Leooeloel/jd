class Menu {
    constructor(id) {
        this.box = document.querySelector(id)
        this.ul = this.box.querySelector("ul")
        this.lis = this.box.querySelectorAll("li")
        this.subMenuEles = this.box.querySelectorAll(".sub-menu")

        this.timer1 = null

        this.init()
    }

    init() {
        console.log("menu")

        this.lis.forEach((item) => {
            item.addEventListener("mouseenter", (e) => {
                let li = e.target
                console.log("mouseenter")

                this.timer1 = setTimeout(() => {
                    this.subMenuEles.forEach((item) => {
                        item.classList.remove("active")
                    })
                    
                }, 200);



            })
        });

        this.lis.forEach((item) => {
            item.addEventListener("mouseleave", (e) => {
                let li = e.target
                console.log("mouseleave")
            })
        })


    }
}