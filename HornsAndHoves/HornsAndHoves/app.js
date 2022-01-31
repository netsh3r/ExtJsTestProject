Ext.Loader.setConfig({ enabled: true });
Ext.application({
    name: 'HornsAndHoves',
    appFolder: 'app',
    controllers: [],
    requires: [
    ],
    
    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [{
                region: 'center',
                xtype: 'tabpanel',
                activeTab: 0,
                items: [
                    {
                        title: 'Организации'
                    }
                ]
            }]
        })
    }
})