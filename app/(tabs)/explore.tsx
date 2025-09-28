import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Gradient } from '@/components/ui/gradient';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <ThemedView style={styles.header}>
          <ThemedText style={styles.headerTitle}>Verification Hub</ThemedText>
          <ThemedText style={styles.headerSubtitle}>Secure your digital identity</ThemedText>
        </ThemedView>

        {/* Verification Status */}
        <ThemedView style={styles.statusSection}>
          <Gradient style={styles.statusCard}>
            <View style={styles.statusContent}>
              <IconSymbol name="checkmark.shield" size={40} color={Colors.dark.text} />
              <ThemedText style={styles.statusTitle}>Identity Verified</ThemedText>
              <ThemedText style={styles.statusSubtitle}>Your credentials are secure and up to date</ThemedText>
            </View>
          </Gradient>
        </ThemedView>

        {/* Quick Actions */}
        <ThemedView style={styles.actionsSection}>
          <ThemedText style={styles.sectionTitle}>Quick Actions</ThemedText>
          
          <View style={styles.actionsGrid}>
            <TouchableOpacity style={styles.actionCard}>
              <ThemedView style={styles.actionIcon}>
                <IconSymbol name="person.badge.plus" size={24} color={Colors.dark.tint} />
              </ThemedView>
              <ThemedText style={styles.actionTitle}>Verify Identity</ThemedText>
              <ThemedText style={styles.actionDescription}>Add new credentials</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <ThemedView style={styles.actionIcon}>
                <IconSymbol name="doc.text" size={24} color={Colors.dark.tint} />
              </ThemedView>
              <ThemedText style={styles.actionTitle}>Documents</ThemedText>
              <ThemedText style={styles.actionDescription}>Manage your docs</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <ThemedView style={styles.actionIcon}>
                <IconSymbol name="key" size={24} color={Colors.dark.tint} />
              </ThemedView>
              <ThemedText style={styles.actionTitle}>Security</ThemedText>
              <ThemedText style={styles.actionDescription}>Privacy settings</ThemedText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionCard}>
              <ThemedView style={styles.actionIcon}>
                <IconSymbol name="chart.bar" size={24} color={Colors.dark.tint} />
              </ThemedView>
              <ThemedText style={styles.actionTitle}>Analytics</ThemedText>
              <ThemedText style={styles.actionDescription}>View activity</ThemedText>
            </TouchableOpacity>
          </View>
        </ThemedView>

        {/* Recent Activity */}
        <ThemedView style={styles.activitySection}>
          <ThemedText style={styles.sectionTitle}>Recent Activity</ThemedText>
          
          <ThemedView style={styles.activityList}>
            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <IconSymbol name="checkmark.circle.fill" size={20} color="#4CAF50" />
              </View>
              <View style={styles.activityInfo}>
                <ThemedText style={styles.activityTitle}>Identity verification completed</ThemedText>
                <ThemedText style={styles.activityTime}>2 hours ago</ThemedText>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <IconSymbol name="doc.badge.plus" size={20} color={Colors.dark.tint} />
              </View>
              <View style={styles.activityInfo}>
                <ThemedText style={styles.activityTitle}>New document uploaded</ThemedText>
                <ThemedText style={styles.activityTime}>Yesterday</ThemedText>
              </View>
            </View>

            <View style={styles.activityItem}>
              <View style={styles.activityIcon}>
                <IconSymbol name="shield.checkered" size={20} color="#FF9800" />
              </View>
              <View style={styles.activityInfo}>
                <ThemedText style={styles.activityTitle}>Security scan completed</ThemedText>
                <ThemedText style={styles.activityTime}>3 days ago</ThemedText>
              </View>
            </View>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
  },
  statusSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  statusCard: {
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
  },
  statusContent: {
    alignItems: 'center',
  },
  statusTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  statusSubtitle: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: 'center',
  },
  actionsSection: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionCard: {
    width: '48%',
    backgroundColor: Colors.dark.card,
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.dark.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    textAlign: 'center',
  },
  actionDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
  activitySection: {
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  activityList: {
    backgroundColor: Colors.dark.card,
    borderRadius: 15,
    padding: 15,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.border,
  },
  activityIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.dark.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  activityInfo: {
    flex: 1,
  },
  activityTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  activityTime: {
    fontSize: 14,
  },
});
