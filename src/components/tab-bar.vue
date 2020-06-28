<template>
<div id="tab-bar">
    <div class="item" v-for="item in tab" :key="item.id">
        <div class="i_inner">
            <p>{{item.tabIcon}}</p>
            <p>{{item.tabName}}</p>
        </div> 
    </div>
   
</div>
</template>

<script>
export default {
    data(){
        return{
            tab:[
                {tabName:"书架",tabIcon:'a'},
                {tabName:"书城",tabIcon:'b'},
                {tabName:"分类",tabIcon:'c'},
                {tabName:"我的",tabIcon:'d'},
            ]
        }
    }
}
</script>

<style scoped>
#tab-bar{
    height: 49px;
    width: 100%;
    border-top: 1px solid #f3f3f3;
    border-bottom: 1px solid #f3f3f3;
    display: flex;
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 12px;

}
.item{
    display: flex;
    height: 49px;
    flex: 1;
    justify-content: center;
    align-items: center;
}   
.i_inner{
    height: 49px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
    
}
</style>