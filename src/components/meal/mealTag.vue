<template>
    <div class="container">
        <ul class="tag">
            <li v-for="(tag,number) in mealTag" :key="tag.title">
                <strong>{{tag.title}} :</strong>
                <ul>
                    <li v-for="(tagCon,index) in tag.con" :key="index">
                        <a href="javascript:void(0)" v-bind:class="{tag_active: tag.selected==index}" @click="tagBtn(number,index)">{{tagCon.name}}</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            mealTag: 'mealTag'
        }),
        ...mapActions({
            mealTagClear:'mealTagClear',
            mealTagChange:'mealTagChange'
        })
    },
    mounted() {
        this.$store.dispatch('qryMealTag')
    },
    methods: {
        tagBtn(number, index,id,name) {
            const changeData = {
                index:index,
                number:number
            }
            this.$store.dispatch('mealTagChange' , changeData)
            const ajaxdata = {}
            for(var i = 0; i<this.mealTag.length;i++){
                ajaxdata[this.mealTag[i].name] = this.mealTag[i].selected
            }
            this.$emit('ajaxTag',ajaxdata);
        }
    }
}
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "./../../assets/css/tag.scss";
</style>
