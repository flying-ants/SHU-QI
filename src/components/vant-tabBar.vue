<template>
    <div class="app">
        <van-tabbar v-model="active">
            
            <van-tabbar-item icon="description">
                <router-link :to="{name:'bookCase'}" tag='div'>书架</router-link>
            </van-tabbar-item>
            
            <van-tabbar-item icon="shop-o">
                <router-link :to="{name:'bookStore'}" tag="div">书城</router-link> 
            </van-tabbar-item>
             
            <van-tabbar-item icon="qr">
                <router-link :to="{name:'classify'}" tag="div">分类</router-link>
            </van-tabbar-item>
            
            <van-tabbar-item icon="manager-o">
                <router-link :to="{name:'mine'}" tag="div">我的</router-link>
            </van-tabbar-item>
            
        </van-tabbar>
    </div>
</template>

<script>

export default {
    data() {
        return {
            active:4,
        };
    },
    methods:{

    }
    
}

</script>