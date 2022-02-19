<template>
    <div class="containter">
        <div class="row">
            <h1>Option </h1>
            <div class="col-lg-6">
                <BurnCard></BurnCard>
            </div>
            <div class="col-lg-6">
                <MintCard></MintCard>
            </div>
        </div>
    </div>
</template>

<script>
import BurnCard from '@/components/option/BurnCard.vue'
import MintCard from '@/components/option/MintCard.vue'

export default {
    name: 'Home',
    data() {
        return {
            collapsed: false,
        }
    },
    components: {
        BurnCard,
        MintCard
    }
}
</script>

<style>
#components-layout-demo-custom-trigger .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
    color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
}
</style>