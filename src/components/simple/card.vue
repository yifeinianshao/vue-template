<style lang="stylus" scoped>
@import '~styl/colors'
.cards
    display: flex
    justify-content: space-between
    align-items: center
    flex-wrap: wrap
    getColors('color')
    .card
        border: 1px solid #eee
        border-radius: 8px
        padding: p = 30px
        width: "calc(45% - %s)" % (2 * p)
        margin-bottom: p
        .card__header
            display: flex
            justify-content: space-between
            .card__title
                font-size: 32px
                color: #4a4a4a
            .card__total
                font-size: 36px
        .card__content
            display: flex
            justify-content: flex-end
            align-items: center
            margin-top: 60px
            .card__text
                color: #9b9b9b
                font-size: 28px
            .card__add
                display: flex
                align-items: center
                .card__number
                    margin-left: 10px
</style>

<template lang="pug">
.cards
    .card(v-for="card, index in cardData", :key="index", @click="$emit('checkCard', card)")
        .card__header
            .card__title {{ card.status }}
            .card__total.color--primary {{ card.total }}
        .card__content
            .card__text 新增
            .card__add(:class="[card.add ? 'color--success' : 'color--danger' ]")
                .card__number +{{ card.add }}
</template>

<script>
export default {
    name: 'cards',
    props: {
        cardData: {
            type: Array,
            required: true
        }
    }
}
</script>
