import BlogTheme from '@sugarat/theme'
import { h } from 'vue'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
// 自定义样式重载
// import './style.scss'
const AIWords = [
    '无论多么沉重的负担，也不要忘记微笑；无论多么漫长的路程，也不要忘记坚持',
    '生活的真谛不在繁华，而在于淡泊',
    '才华是刀刃，辛苦是刀石，很锋利的刀刃，若日久不用磨，也会生锈，成为废物',
    '努力到无能为力，拼搏到感动自己',
    '不以其道，得之不去也',
    '向上的路，并不拥挤。拥挤是因为，大部分人选择了安逸',
    '改变的确很难，但结果值得冒险，拿出点勇气来，路还很长，现在，才刚开始而已',
    '乾坤未定，你我皆是黑马',
    '愿你不被岁月磨平棱角，不对世事消极抱怨，你所有的选择都不是因为不得已，而是因为喜欢',
    '没有人可以左右你的人生，只是很多时候我们需要多一些勇气，去坚定自己的选择'
]
const homeProps: Theme.HomeConfig = {
    handleChangeSlogan() {  //点击切换slogan
        return AIWords[Math.floor(Math.random() * AIWords.length)]
    }
}

export default {
    ...BlogTheme,
    Layout: h(BlogTheme.Layout as any, homeProps),
    enhanceApp(ctx: any) {
        BlogTheme?.enhanceApp?.(ctx)
        enhanceAppWithTabs(ctx.app)
    }
}