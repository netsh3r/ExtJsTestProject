Ext.Loader.setConfig({ enabled: true });

Ext.define('Agency', {
    extend: 'Ext.data.Model',

    idProperty: 'Id',

    fields: [{
        name: 'Id',
        type: 'int'
    },
    { name: 'Name', type: 'string' },
    { name: 'Surname', type: 'string' },
    { name: 'FirstName', type: 'string' },
    { name: 'Partonymic', type: 'string' },
    { name: 'City', type: 'string' },
    { name: 'Inn', type: 'string' },
    { name: 'Kpp', type: 'string' },
    { name: 'Ogrn', type: 'string' },
    { name: 'Bik', type: 'string' },
    { name: 'EmployeeCount', type: 'int' }
    ]
});

let store = Ext.create('Ext.data.Store', {
    model: 'Agency',
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8000/Home/List',
        reader: {
            type: 'json',
            root: 'Agency'
        }
    }
});

let grid = Ext.create('Ext.grid.Panel', {
    title: 'Список организаций',
    height: 500,
    width: 1000,
    store: store,
    columns: [
        { header: 'Название организации', dataIndex: 'Name' },
        { header: 'ФИО учредителя', dataIndex: 'Surname', xtype: 'templatecolumn', tpl: '{Surname}.{FirstName}.{Partonymic}' },
        { header: 'Город', dataIndex: 'City' },
        { header: 'ИНН', dataIndex: 'Inn' },
        { header: 'КПП', dataIndex: 'Kpp' },
        { header: 'ОГРН', dataIndex: 'Ogrn' },
        { header: 'БИК', dataIndex: 'Bik' },
        { header: 'Количество сотрудников', dataIndex: 'EmployeeCount' },
        {
            xtype: 'actioncolumn', width: 40, items: [{
                icon: 'editing.png',
                handler: function (grid, rowIndex, colIndex) {
                    //console.log(grid, rowIndex, colIndex);
                    let selectionModel = grid.getSelectionModel(), record;
                    selectionModel.select(rowIndex);
                    record = selectionModel.getSelection()[0];
                    //console.log(record.get('Id'));
                    editAgency(record.get('Id'));
                }
            }]
        }
    ],
    region: 'south',
    //listeners: {
    //    click: function () {
    //        console.log(click);
    //    }
    //}
    //margin: '37 0 0 0'
});

function editAgency(id) {
    let singleAgencyStore = Ext.create('Ext.data.Store', {
        model: 'Agency',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: `http://localhost:8000/Home/GetSingle?id=${id}`,
            reader: {
                type: 'json',
                root: 'Agency'
            }
        }
    });



    Ext.create('Ext.window.Window', {
        title: singleAgencyStore.first().Surname,
        height: 500,
        width: 500,
        layout: 'fit',
        items: {

        }
    }).show();
}

Ext.application({
    name: 'HornsAndHoves',
    appFolder: 'app',
    controllers: [],
    requires: [
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items: [
                {
                    region: 'center',
                    xtype: 'tabpanel',
                    activeTab: 0,
                    items: [
                        {
                            title: 'Организации'
                        },
                    ]
                }, grid
            ]
        })
    }
});


