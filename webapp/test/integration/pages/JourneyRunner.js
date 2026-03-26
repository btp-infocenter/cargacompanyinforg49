sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"cargacompanyinforg49/test/integration/pages/SociedadList",
	"cargacompanyinforg49/test/integration/pages/SociedadObjectPage"
], function (JourneyRunner, SociedadList, SociedadObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('cargacompanyinforg49') + '/test/flp.html#app-preview',
        pages: {
			onTheSociedadList: SociedadList,
			onTheSociedadObjectPage: SociedadObjectPage
        },
        async: true
    });

    return runner;
});

