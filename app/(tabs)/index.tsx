import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Gradient } from '@/components/ui/gradient';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useRef, useState } from 'react';
import { Animated, Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

// Hardcoded verification history data
const verificationHistory = [
  {
    id: '1',
    title: 'Document Verification',
    status: 'verified',
    date: 'Today, 2:30 PM',
    type: 'ID Card',
    issuer: 'Government',
  },
  {
    id: '2',
    title: 'Degree Certificate',
    status: 'verified',
    date: 'Yesterday, 4:15 PM',
    type: 'Education',
    issuer: 'University of Technology',
  },
  {
    id: '3',
    title: 'Employment Record',
    status: 'pending',
    date: '2 days ago, 10:20 AM',
    type: 'Employment',
    issuer: 'TechCorp Inc.',
  },
  {
    id: '4',
    title: 'Medical Certificate',
    status: 'verified',
    date: '3 days ago, 3:45 PM',
    type: 'Health',
    issuer: 'City Medical Center',
  },
  {
    id: '5',
    title: 'Property Deed',
    status: 'rejected',
    date: '1 week ago, 9:30 AM',
    type: 'Property',
    issuer: 'Land Registry Office',
  },
];

export default function HomeScreen() {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  // Get screen dimensions
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  
  // Calculate responsive card dimensions
  const getCardDimensions = () => {
    const isTablet = screenWidth >= 768;
    const isDesktop = screenWidth >= 1024;
    
    if (isDesktop) {
      return {
        width: Math.min(400, screenWidth * 0.35),
        minHeight: 240,
        padding: 24,
        borderRadius: 24,
      };
    } else if (isTablet) {
      return {
        width: Math.min(360, screenWidth * 0.6),
        minHeight: 220,
        padding: 22,
        borderRadius: 22,
      };
    } else {
      // Mobile
      return {
        width: Math.min(320, screenWidth - 40),
        minHeight: 200,
        padding: 20,
        borderRadius: 20,
      };
    }
  };

  const cardDimensions = getCardDimensions();

  // Calculate responsive font sizes
  const getResponsiveFontSizes = () => {
    const isTablet = screenWidth >= 768;
    const isDesktop = screenWidth >= 1024;
    
    if (isDesktop) {
      return {
        cardTitle: 28,
        cardSubtitle: 16,
        cardDescription: 14,
        addressText: 18,
        backTitle: 20,
        detailValue: 16,
      };
    } else if (isTablet) {
      return {
        cardTitle: 26,
        cardSubtitle: 15,
        cardDescription: 13,
        addressText: 17,
        backTitle: 19,
        detailValue: 15,
      };
    } else {
      return {
        cardTitle: 24,
        cardSubtitle: 14,
        cardDescription: 12,
        addressText: 16,
        backTitle: 18,
        detailValue: 14,
      };
    }
  };

  const fontSizes = getResponsiveFontSizes();

  const flipCard = () => {
    const toValue = isFlipped ? 0 : 1;
    setIsFlipped(!isFlipped);
    
    Animated.timing(flipAnimation, {
      toValue,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['180deg', '360deg'],
  });

  return (
    <ThemedView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <ThemedView style={[
          styles.header,
          { paddingHorizontal: screenWidth >= 768 ? 40 : 20 }
        ]}>
          <View style={styles.profileSection}>
            <View style={styles.avatar}>
              <ThemedText style={styles.avatarText}>MD</ThemedText>
            </View>
            <View style={styles.profileInfo}>
              <ThemedText style={styles.profileName}>Martina Doherty</ThemedText>
            </View>
            <TouchableOpacity style={styles.notificationButton}>
              <IconSymbol name="bell" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </ThemedView>

        {/* Web3 ID Card Section */}
        <ThemedView style={styles.cardSection}>
          <View style={[
            styles.cardHeader,
            { paddingHorizontal: screenWidth >= 768 ? 40 : 20 }
          ]}>
            <ThemedText style={[
              styles.sectionTitle,
              { fontSize: screenWidth >= 1024 ? 28 : screenWidth >= 768 ? 26 : 24 }
            ]}>Veri3 ID</ThemedText>
            <TouchableOpacity onPress={flipCard} style={styles.flipButton}>
              <IconSymbol name="chevron.right" size={16} color={Colors.dark.text} />
              <ThemedText style={styles.flipButtonText}>QR</ThemedText>
            </TouchableOpacity>
          </View>
          
          <View style={[
            styles.cardContainer,
            { paddingHorizontal: screenWidth >= 768 ? 40 : 20 }
          ]}>
            <TouchableOpacity onPress={flipCard} activeOpacity={0.9}>
              <Animated.View style={[
                styles.card, 
                { 
                  transform: [{ rotateY: frontInterpolate }],
                  width: cardDimensions.width,
                  minHeight: cardDimensions.minHeight,
                }
              ]}>
                <Gradient style={StyleSheet.flatten([
                  styles.web3Card,
                  {
                    width: cardDimensions.width,
                    minHeight: cardDimensions.minHeight,
                    borderRadius: cardDimensions.borderRadius,
                    padding: cardDimensions.padding,
                  }
                ])}>
                  <View style={styles.cardContent}>
                    <View style={styles.cardTop}>
                      <View style={styles.web3Logo}>
                        <ThemedText style={styles.web3Text}>Web3</ThemedText>
                      </View>
                      <View style={styles.chainIndicator}>
                        <View style={styles.chainDot} />
                        <ThemedText style={styles.chainText}>Ethereum</ThemedText>
                      </View>
                    </View>
                    
                    <View style={styles.cardMiddle}>
                      <ThemedText style={[styles.cardTitle, { fontSize: fontSizes.cardTitle }]}>Digital Identity</ThemedText>
                      <ThemedText style={[styles.cardSubtitle, { fontSize: fontSizes.cardSubtitle }]}>Veri3 Protocol</ThemedText>
                      <ThemedText style={[styles.cardDescription, { fontSize: fontSizes.cardDescription }]}>Decentralized Identity Verification</ThemedText>
                    </View>
                    
                    <View style={styles.cardBottom}>
                      <View style={styles.walletAddress}>
                        <ThemedText style={styles.addressLabel}>Wallet Address</ThemedText>
                        <ThemedText style={[styles.addressText, { fontSize: fontSizes.addressText }]}>0x742d...8f3a</ThemedText>
                      </View>
                      <View style={styles.verificationBadge}>
                        <IconSymbol name="person.badge.shield.checkmark" size={16} color="#FFFFFF" />
                        <ThemedText style={styles.verifiedText}>Verified</ThemedText>
                      </View>
                    </View>
                  </View>
                </Gradient>
              </Animated.View>
              
              <Animated.View style={[
                styles.card, 
                styles.cardBack, 
                { 
                  transform: [{ rotateY: backInterpolate }],
                  width: cardDimensions.width,
                  minHeight: cardDimensions.minHeight,
                }
              ]}>
                <ThemedView style={StyleSheet.flatten([
                  styles.web3CardBack,
                  {
                    width: cardDimensions.width,
                    minHeight: cardDimensions.minHeight,
                    borderRadius: cardDimensions.borderRadius,
                    padding: cardDimensions.padding,
                  }
                ])}>
                  <View style={styles.cardContent}>
                    <View style={styles.backHeader}>
                      <ThemedText style={[styles.backTitle, { fontSize: fontSizes.backTitle }]}>Identity Details</ThemedText>
                      <IconSymbol name="person.badge.shield.checkmark" size={24} color={Colors.dark.text} />
                    </View>
                    
                    <View style={styles.detailsSection}>
                      <View style={styles.detailRow}>
                        <ThemedText style={styles.detailLabel}>Full Name</ThemedText>
                        <ThemedText style={[styles.detailValue, { fontSize: fontSizes.detailValue }]}>Martina Doherty</ThemedText>
                      </View>
                      <View style={styles.detailRow}>
                        <ThemedText style={styles.detailLabel}>DID</ThemedText>
                        <ThemedText style={[styles.detailValue, { fontSize: fontSizes.detailValue }]}>did:veri3:742d...8f3a</ThemedText>
                      </View>
                      <View style={styles.detailRow}>
                        <ThemedText style={styles.detailLabel}>Status</ThemedText>
                        <ThemedText style={[styles.detailValue, { fontSize: fontSizes.detailValue }]}>Active</ThemedText>
                      </View>
                    </View>
                    
                    <View style={styles.backFooter}>
                      <View style={styles.securityBadge}>
                        <IconSymbol name="lock" size={14} color="#10B981" />
                        <ThemedText style={styles.securityText}>End-to-End Encrypted</ThemedText>
                      </View>
                    </View>
                  </View>
                </ThemedView>
              </Animated.View>
            </TouchableOpacity>
          </View>
        </ThemedView>

        {/* Quick Actions */}
        <ThemedView style={[
          styles.quickActions,
          { paddingHorizontal: screenWidth >= 768 ? 40 : 20 }
        ]}>
          <TouchableOpacity style={styles.actionButton}>
            <ThemedView style={styles.actionIcon}>
              <IconSymbol name="arrow.up.right" size={24} color={Colors.dark.text} />
            </ThemedView>
            <ThemedText style={styles.actionText}>Send</ThemedText>
          </TouchableOpacity>
          
          {/* <TouchableOpacity style={styles.actionButton}>
            <ThemedView style={styles.actionIcon}>
              <IconSymbol name="arrow.down.left" size={24} color={Colors.dark.text} />
            </ThemedView>
            <ThemedText style={styles.actionText}>Received</ThemedText>
          </TouchableOpacity> */}
          
          <TouchableOpacity style={styles.actionButton}>
            <ThemedView style={styles.actionIcon}>
              <IconSymbol name="lock" size={24} color={Colors.dark.text} />
            </ThemedView>
            <ThemedText style={styles.actionText}>Freeze</ThemedText>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionButton}>
            <ThemedView style={styles.actionIcon}>
              <IconSymbol name="grid" size={24} color={Colors.dark.text} />
            </ThemedView>
            <ThemedText style={styles.actionText}>More</ThemedText>
          </TouchableOpacity>
        </ThemedView>

        {/* Recent Activity */}
        <ThemedView style={[
          styles.verificationSection,
          { paddingHorizontal: screenWidth >= 768 ? 40 : 20 }
        ]}>
          <View style={styles.verificationHeader}>
            <ThemedText style={[
              styles.sectionTitle,
              { fontSize: screenWidth >= 1024 ? 28 : screenWidth >= 768 ? 26 : 24 }
            ]}>Recent Activity</ThemedText>
            <TouchableOpacity>
              <ThemedText style={styles.seeAllText}>See all</ThemedText>
            </TouchableOpacity>
          </View>
          
          <ThemedView style={styles.verificationList}>
            {verificationHistory.map((item) => (
              <View key={item.id} style={styles.verificationItem}>
                <View style={styles.verificationIcon}>
                  <IconSymbol 
                    name={item.type === 'ID Card' ? 'person.badge.shield.checkmark' : 
                          item.type === 'Education' ? 'graduationcap' :
                          item.type === 'Employment' ? 'briefcase' :
                          item.type === 'Health' ? 'cross.case' :
                          item.type === 'Property' ? 'house' : 'doc.text'} 
                    size={20} 
                    color={Colors.dark.text} 
                  />
                </View>
                <View style={styles.verificationInfo}>
                  <ThemedText style={styles.verificationTitle}>{item.title}</ThemedText>
                  <ThemedText style={styles.verificationIssuer}>{item.issuer}</ThemedText>
                  <ThemedText style={styles.verificationDate}>{item.date}</ThemedText>
                </View>
                <View style={[
                  styles.statusBadge,
                  item.status === 'verified' && styles.statusVerified,
                  item.status === 'pending' && styles.statusPending,
                  item.status === 'rejected' && styles.statusRejected,
                ]}>
                  <ThemedText style={[
                    styles.statusText,
                    item.status === 'verified' && styles.statusTextVerified,
                    item.status === 'pending' && styles.statusTextPending,
                    item.status === 'rejected' && styles.statusTextRejected,
                  ]}>
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                  </ThemedText>
                </View>
              </View>
            ))}
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
    paddingBottom: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.dark.card,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileInfo: {
    flex: 1,
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.dark.border,
  },
  cardSection: {
    marginBottom: 30,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  flipButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Colors.dark.border,
  },
  flipButtonText: {
    marginLeft: 5,
    fontSize: 14,
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  card: {
    backfaceVisibility: 'hidden',
  },
  cardBack: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  web3Card: {
    flex: 1,
  },
  web3CardBack: {
    backgroundColor: Colors.dark.card,
    borderWidth: 1,
    borderColor: Colors.dark.border,
    flex: 1,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  web3Logo: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  web3Text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  chainIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chainDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#10B981',
    marginRight: 6,
  },
  chainText: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.8,
  },
  cardMiddle: {
    alignItems: 'center',
    marginVertical: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.8,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.6,
  },
  cardBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  walletAddress: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 12,
    color: '#FFFFFF',
    opacity: 0.7,
    marginBottom: 4,
  },
  addressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  verificationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  verifiedText: {
    fontSize: 12,
    color: '#FFFFFF',
    marginLeft: 4,
    fontWeight: '600',
  },
  backHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detailsSection: {
    flex: 1,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.border,
  },
  detailLabel: {
    fontSize: 14,
    opacity: 0.7,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  backFooter: {
    marginTop: 15,
  },
  securityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  securityText: {
    fontSize: 12,
    color: '#10B981',
    marginLeft: 4,
    fontWeight: '500',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: Colors.dark.card,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    textAlign: 'center',
  },
  verificationSection: {
    marginBottom: 100,
  },
  verificationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  seeAllText: {
    fontSize: 16,
  },
  verificationList: {
    backgroundColor: Colors.dark.card,
    borderRadius: 15,
    padding: 15,
  },
  verificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.dark.border,
  },
  verificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.dark.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  verificationInfo: {
    flex: 1,
  },
  verificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  verificationIssuer: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 2,
  },
  verificationDate: {
    fontSize: 12,
    opacity: 0.6,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    marginLeft: 10,
  },
  statusVerified: {
    backgroundColor: 'rgba(16, 185, 129, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(16, 185, 129, 0.3)',
  },
  statusPending: {
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(245, 158, 11, 0.3)',
  },
  statusRejected: {
    backgroundColor: 'rgba(239, 68, 68, 0.15)',
    borderWidth: 1,
    borderColor: 'rgba(239, 68, 68, 0.3)',
  },
  statusText: {
    fontSize: 12,
    fontWeight: '500',
  },
  statusTextVerified: {
    color: '#10B981',
  },
  statusTextPending: {
    color: '#F59E0B',
  },
  statusTextRejected: {
    color: '#EF4444',
  },
});
