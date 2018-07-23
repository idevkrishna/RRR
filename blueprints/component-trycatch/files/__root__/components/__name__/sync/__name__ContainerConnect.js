import { connect } from 'react-redux'
import <%= pascalEntityName %> from '../<%= pascalEntityName %>'
import { mapStateToProps, mapDispatchToProps } from '../<%= pascalEntityName %>Container'

export default connect(mapStateToProps, mapDispatchToProps)(<%= pascalEntityName %>)
