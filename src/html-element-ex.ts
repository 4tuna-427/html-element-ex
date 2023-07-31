export default class HTMLElementEx {
    elem: HTMLElement

    constructor(elem: HTMLElement) {
        this.elem = elem
    }

    HTMLElement(): HTMLElement {
        return this.elem
    }

    /*
    *  クラスの追加・削除
    */
    addClass(className: string): HTMLElementEx {
        this.elem.classList.add(className)
        return this
    }

    removeClass(className: string): HTMLElementEx {
        this.elem.classList.remove(className)
        return this
    }

    /*
    *  クラスの追加・削除（削除する場合、追加した回数分削除する必要がある）
    */
    stackClass(_className: string): HTMLElementEx {
        const className = _className.replace(/^\./, '')
        const addrName = 'stack_class-' + className
        const count = parseInt(this.elem.getAttribute(addrName) || '0')
        this.elem.setAttribute(addrName, '' + (count + 1))
        this.elem.classList.add(className)
        return this
    }

    queueClass(_className: string): HTMLElementEx {
        const className = _className.replace(/^\./, '')
        const addrName = 'stack_class-' + className.replace(/^\./, '')
        const count = parseInt(this.elem.getAttribute(addrName) || '0')
        if (count - 1 > 0) {
            this.elem.setAttribute(addrName, '' + (count - 1))
        }
        else {
            this.elem.classList.remove(className)
            this.elem.removeAttribute(addrName)
        }
        return this
    }

    /*
    *  要素の挿入
    */
    insert(position: string, elem: HTMLElement): HTMLElementEx {
        if (position === 'before') {
            this.elem.insertAdjacentElement('beforebegin', elem)
        }
        else if (position === 'begin') {
            this.elem.insertAdjacentElement('afterbegin', elem)
        }
        else if (position === 'end') {
            this.elem.insertAdjacentElement('beforeend', elem)
        }
        else if (position === 'after') {
            this.elem.insertAdjacentElement('afterend', elem)
        }
        return this
    }

    /*
    *  rectの取得
    */
    getRect(): DOMRect {
        return this.elem.getBoundingClientRect()
    }
}
