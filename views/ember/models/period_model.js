App.Period = DS.Model.extend({
  artwork:            DS.belongsTo('artwork'),
  order:              DS.attr("number"),
  period_certainty:   DS.attr('boolean'),
  acquisition_method: DS.attr('string'),
  party:              DS.attr('string'),
  party_certainty:    DS.attr('boolean'),
  birth:              DS.attr('date'),
  birth_certainty:    DS.attr('boolean'),
  death:              DS.attr('date'),
  death_certainty:    DS.attr('boolean'),
  location:           DS.attr('string'),
  location_certainty: DS.attr('boolean'),
  botb:               DS.attr('date'),
  botb_certainty:     DS.attr('boolean'),
  botb_precision:     DS.attr('number'),
  eotb:               DS.attr('string'),
  eotb_certainty:     DS.attr('boolean'),
  eotb_precision:     DS.attr('number'),
  bote:               DS.attr('date'),
  bote_certainty:     DS.attr('boolean'),
  bote_precision:     DS.attr('number'),
  eote:               DS.attr('date'),
  eote_certainty:     DS.attr('boolean'),
  eote_precision:     DS.attr('number'),
  original_text:      DS.attr('string'),
  provenance:         DS.attr('string'),
  parsable:           DS.attr('boolean'),
  direct_transfer:    DS.attr('string'),
  stock_number:       DS.attr('string'),
  footnote:           DS.attr('string'),
  earliest_possible:  DS.attr('date'),
  latest_possible:    DS.attr('date'),
  earliest_definite:  DS.attr('date'),
  latest_definite:    DS.attr('date'),
  acquisition_time_span: DS.attr("string"),
  deacquisition_time_span: DS.attr("string"),

  computed_earliest_possible: function() {
    if(this.get("earliest_possible")) return this.get("earliest_possible");
    return this.get("artwork.creationDateEarliest"); 
  }.property("earliest_possible","artwork.creationDateEarliest"),
});